/** Storage Type */
export declare type StorageType = 'localStorage' | 'sessionStorage';
export interface StorageOptions {
    prefix?: string;
    connector?: string;
    type: StorageType;
}
