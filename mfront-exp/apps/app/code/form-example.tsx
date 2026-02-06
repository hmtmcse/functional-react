import {useEffect, useState} from "react";

type UserFormData = {
    name: string;
    email: string;
};

const STORAGE_KEY = "user_profile";

export default function UserProfileForm() {
    const [form, setForm] = useState<UserFormData>({
        name: "",
        email: "",
    });

    const [isEditing, setIsEditing] = useState(false);

    // Load data from browser storage
    useEffect(() => {
        const storedData = localStorage.getItem(STORAGE_KEY);
        if (storedData) {
            setForm(JSON.parse(storedData));
            setIsEditing(true);
        }
    }, []);

    // Handle input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Submit form
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
        setIsEditing(true);

        alert("Data saved successfully!");
    };

    // Clear storage (optional)
    const handleClear = () => {
        localStorage.removeItem(STORAGE_KEY);
        setForm({name: "", email: ""});
        setIsEditing(false);
    };

    return (
        <div style={{maxWidth: 400}}>
            <h2>{isEditing ? "Edit Profile" : "Create Profile"}</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label>Email</label>
                    <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit">
                    {isEditing ? "Update" : "Submit"}
                </button>
            </form>

            {isEditing && (
                <button onClick={handleClear} style={{marginTop: 10}}>
                    Clear Data
                </button>
            )}
        </div>
    );
}
