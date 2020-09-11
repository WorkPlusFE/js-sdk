export default class Logger {
    private _PREFIX;
    private _enabled;
    constructor(enabled?: boolean);
    disable(): void;
    enable(): void;
    log(...args: unknown[]): void;
    warn(...args: unknown[]): void;
    error(...args: unknown[]): void;
}
