import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import { execSync } from "child_process";

const config = yaml.load(fs.readFileSync("msm.yml", "utf8"));

const errors = [];
function run(cmd, cwd = process.cwd(), options = {}) {
    try {
        console.log(`\n👉 ${cmd}`);
        execSync(cmd, { stdio: "inherit", cwd });
        return true;
    } catch (err) {
        console.error(`❌ Failed: ${cmd}`);
        errors.push({ cmd, cwd });

        if (options.exitOnError) {
            throw err;
        }
        return false;
    }
}

function getRepoName(url) {
    return url.split("/").pop().replace(".git", "");
}

function ensureDir(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

function isGitRepo(dir) {
    return fs.existsSync(path.join(dir, ".git"));
}


if (config.startScript) {
    console.log("\n🚀 Running startScript...");
    config.startScript.forEach(cmd => run(cmd));
}

for (const dep of config.dependencies || []) {
    if (dep.status && dep.status !== "active") continue;

    console.log(`\n📦 Processing: ${dep.name}`);

    const baseDir = dep.dir || ".";
    ensureDir(baseDir);

    const branch = dep.clone?.branch || "main";

    for (const repo of dep.clone?.repo || []) {
        const repoName = getRepoName(repo.url);
        const targetDir = path.join(baseDir, repoName);

        if (fs.existsSync(targetDir) && isGitRepo(targetDir)) {
            console.log(`🔄 Updating ${repoName}...`);

            run(`git fetch`, targetDir);
            run(`git checkout ${branch}`, targetDir);
            run(`git pull origin ${branch}`, targetDir);
        } else {
            console.log(`📥 Cloning ${repoName}...`);
            run(`git clone -b ${branch} ${repo.url} ${targetDir}`);
        }
    }
}

if (config.endScript) {
    console.log("\n🏁 Running endScript...");
    config.endScript.forEach(cmd => run(cmd));
}


if (errors.length > 0) {
    console.log("\n⚠️ Some commands failed:\n");
    errors.forEach((e, i) => {
        console.log(`${i + 1}. ${e.cmd} (in ${e.cwd})`);
    });
} else {
    console.log("\n✅ Setup completed successfully!");
}