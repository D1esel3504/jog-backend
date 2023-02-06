/* eslint-disable @typescript-eslint/no-invalid-void-type */
/* eslint-disable @typescript-eslint/no-explicit-any */

export type CustomAny = any;

export type Nullable<T> = T | null | undefined;

export type AnyObject = Record<string, CustomAny>;

export type AnyFunction = (...args: CustomAny[]) => Promise<CustomAny> | CustomAny;

export type CustomVoid = void;
