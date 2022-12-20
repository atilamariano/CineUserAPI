import { MovieEntity } from 'src/movies/entities/movie.entity';
export declare class CreateUserDto {
    userName: string;
    userEmail: string;
    userPassword: string;
    userCpf: string;
    movies: MovieEntity[];
}
