/** Storage Type */
export type StorageType = 'localStorage' | 'sessionStorage';

export interface StorageOptions {
  prefix?: string;
  connector?: string;
  type: StorageType;
}
