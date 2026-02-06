import type {User} from "./user";
import UserItem from "./UserItem";

type Props = {
    users: User[];
    onEdit: (user: User) => void;
    onDelete: (id: string) => void;
};

export default function UserList({users, onEdit, onDelete}: Props) {
    if (users.length === 0) {
        return <p>No users found.</p>;
    }

    return (
        <ul>
            {users.map((user) => (
                <UserItem
                    key={user.id}
                    user={user}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}
