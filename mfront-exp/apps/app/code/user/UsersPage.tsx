import UserForm from "./UserForm";
import UserList from "./UserList";
import {useUsers} from "./useUsers";

export default function UsersPage() {
    const {
        users,
        editingUser,
        setEditingUser,
        createUser,
        updateUser,
        deleteUser,
    } = useUsers();

    return (
        <div>
            <h2>User Management</h2>

            <UserForm
                editingUser={editingUser}
                onCreate={createUser}
                onUpdate={updateUser}
            />

            <UserList
                users={users}
                onEdit={setEditingUser}
                onDelete={deleteUser}
            />
        </div>
    );
}
