import type {User} from "./user";

type Props = {
    user: User;
    onEdit: (user: User) => void;
    onDelete: (id: string) => void;
};

export default function UserItem({user, onEdit, onDelete}: Props) {
    return (
        <li>
            <strong>{user.name}</strong> — {user.email}

            <button onClick={() => onEdit(user)}>Edit</button>
            <button onClick={() => onDelete(user.id)}>Delete</button>
        </li>
    );
}
