export class UserService {
    async getUsers() {
        // fake API (no backend needed)
        await new Promise(r => setTimeout(r, 2000));

        return [
            {id: 1, name: "Touhid"},
            {id: 2, name: "Fayaz"},
            {id: 3, name: "MFront User"}
        ];
    }
}
