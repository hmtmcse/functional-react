export class CounterService {
    async increment(current: number) {
        await new Promise(r => setTimeout(r, 300)); // simulate API
        return current + 1;
    }

    async decrement(current: number) {
        await new Promise(r => setTimeout(r, 300));
        return current - 1;
    }
}
