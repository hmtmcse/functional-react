import {useView} from "./useView";
import {userView} from "./userView";

export default function UserPage() {
    const view = useView(userView);

    if (view.loading) {
        return <p>Loading users...</p>;
    }

    return (
        <div style={{padding: 20}}>
            <h2>MFront PoC</h2>

            <button onClick={view.reload}>
                Reload
            </button>

            <ul>
                {view.users.map(u => (
                    <li key={u.id}>{u.name}</li>
                ))}
            </ul>
        </div>
    );
}
