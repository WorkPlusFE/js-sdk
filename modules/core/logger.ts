export default class Logger {
  private _PREFIX = 'WorkPlus SDK ';
  private _enabled: boolean;

  constructor(enabled = false) {
    this._enabled = enabled;
  }

  public disable(): void {
    this._enabled = false;
  }

  public enable(): void {
    this._enabled = true;
  }

  public log(...args: unknown[]): void {
    if (!this._enabled) {
      return;
    }
    console.log(`${this._PREFIX}[Log]: ${args.join(' ')}`);
  }

  public warn(...args: unknown[]): void {
    if (!this._enabled) {
      return;
    }
    console.info(`${this._PREFIX}[Warn]: ${args.join(' ')}`);
  }

  public error(...args: unknown[]): void {
    if (!this._enabled) {
      return;
    }
    console.error(`${this._PREFIX}[Error]: ${args.join(' ')}`);
  }
}
