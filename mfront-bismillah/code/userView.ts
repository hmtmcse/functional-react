import {UserService} from "./UserService";

export function userView() {
    const service = new UserService();

    return {
        users: [] as any[],
        loading: false,

        async onLoad() {
            this.loading = true;
            this.users = await service.getUsers();
            this.loading = false;
        },

        reload() {
            this.onLoad();
        }
    };
}
