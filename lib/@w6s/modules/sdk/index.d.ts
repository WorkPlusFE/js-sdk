import { SDKOptions } from '../types/sdk';
declare class SDK {
    private _isReady;
    constructor(options: SDKOptions);
    init(options: SDKOptions): boolean;
    _ready(fn?: Function): void;
    static sendEvent<S, F>(service: string, action: string, data?: any[], successFn?: (data: S) => void, failedFn?: (data: F) => void): Promise<S> | undefined;
    get isReday(): boolean;
}
export default SDK;
