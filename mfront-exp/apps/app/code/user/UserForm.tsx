import {useEffect, useState} from "react";
import type {User} from "./user";

type Props = {
    editingUser: User | null;
    onCreate: (user: User) => void;
    onUpdate: (user: User) => void;
};

export default function UserForm({editingUser, onCreate, onUpdate, }: Props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (editingUser) {
            setName(editingUser.name);
            setEmail(editingUser.email);
        } else {
            setName("");
            setEmail("");
        }
    }, [editingUser]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (editingUser) {
            onUpdate({
                ...editingUser,
                name,
                email,
            });
        } else {
            onCreate({
                id: crypto.randomUUID(),
                name,
                email,
            });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>{editingUser ? "Edit User" : "Add User"}</h3>

            <input
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />

            <input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <button type="submit">
                {editingUser ? "Update" : "Create"}
            </button>
        </form>
    );
}
