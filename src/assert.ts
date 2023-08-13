export function assert(condition: unknown, message: str = 'assertion failed'): asserts condition {
    if (!condition) throw new Error(message);
}
