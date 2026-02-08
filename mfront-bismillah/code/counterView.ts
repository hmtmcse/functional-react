import {CounterService} from "./CounterService";

export function counterView() {
    const service = new CounterService();

    return {
        count: 0,
        loading: false,

        onLoad() {
            console.log("CounterView loaded");
        },

        async increment() {
            this.loading = true;
            this.count = await service.increment(this.count);
            this.loading = false;
        },

        async decrement() {
            this.loading = true;
            this.count = await service.decrement(this.count);
            this.loading = false;
        },

        reset() {
            this.count = 0;
        }
    };
}
