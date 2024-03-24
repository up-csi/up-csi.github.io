export class AssertionError extends Error {
    constructor(msg: string) {
        super(msg);
        this.name = 'AssertionError';
    }
}

export function assert(condition: unknown, msg: string) {
    if (!condition) throw new AssertionError(msg);
}
