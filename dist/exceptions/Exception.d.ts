import { Exceptions } from './exceptionsHelper';
export declare class ExceptionClass {
    readonly exception: Exceptions;
    readonly message?: string;
    constructor(exception: Exceptions, message?: string);
}
