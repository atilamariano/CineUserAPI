import { IException } from './IException';
export declare enum Exceptions {
    InvalidData = 0,
    DatabaseException = 1,
    NotFoundData = 2,
    UnauthorizedException = 3
}
export declare function handleException({ message, exception }: IException): void;
