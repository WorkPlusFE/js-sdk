import { SDKOptions } from '../types/sdk';
declare class SDK {
    private _isReady;
    constructor(options: SDKOptions);
    init(options: SDKOptions): boolean;
    _ready(fn?: Function): void;
    static sendEvent<A, S, F>(service: string, action: string, args: Array<A>, success?: (data: S) => void, failed?: (err: F) => void): Promise<S>;
    get isReday(): boolean;
}
export default SDK;
