/**
 * Checks whether given value's type is a string
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
export function isString(wat: unknown): boolean {
  return Object.prototype.toString.call(wat) === '[object String]';
}

/**
 * Checks whether given value's is a primitive (undefined, null, number, boolean, string)
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
export function isPrimitive(wat: unknown): boolean {
  return wat === null || (typeof wat !== 'object' && typeof wat !== 'function');
}

/**
 * Checks whether given value's type is an object literal
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
export function isPlainObject(wat: unknown): boolean {
  return Object.prototype.toString.call(wat) === '[object Object]';
}

/**
 * Checks whether given value's type is an array
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
export function isArray(wat: unknown): boolean {
  return Object.prototype.toString.call(wat) === '[object Array]';
}

/**
 * Checks whether given value's type is a function
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
export function isFunction(wat: unknown): boolean {
  return Object.prototype.toString.call(wat) === '[object Function]';
}
