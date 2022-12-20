import { UserEntity } from 'src/user/entities/user.entity';
export declare class CreateMovieDto {
    movieTitle: string;
    movieDescription: string;
    releaseYear: number;
    createdByUser: UserEntity;
}
