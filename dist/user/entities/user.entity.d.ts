import { MovieEntity } from 'src/movies/entities/movie.entity';
export declare class UserEntity {
    id: string;
    userName: string;
    userEmail: string;
    userPassword: string;
    userCpf: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
    hashPassword(): void;
    movies: MovieEntity[];
}
