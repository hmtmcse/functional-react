import {useEffect, useState} from "react";
import type {User} from "./user";

const STORAGE_KEY = "users";

export function useUsers() {
    const [users, setUsers] = useState<User[]>([]);
    const [editingUser, setEditingUser] = useState<User | null>(null);

    // Load users
    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            setUsers(JSON.parse(stored));
        }
    }, []);

    // Persist users
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
    }, [users]);

    const createUser = (user: User) => {
        setUsers((prev) => [...prev, user]);
    };

    const updateUser = (updated: User) => {
        setUsers((prev) =>
            prev.map((u) => (u.id === updated.id ? updated : u))
        );
        setEditingUser(null);
    };

    const deleteUser = (id: string) => {
        setUsers((prev) => prev.filter((u) => u.id !== id));
    };

    return {
        users,
        editingUser,
        setEditingUser,
        createUser,
        updateUser,
        deleteUser,
    };
}
