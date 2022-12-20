import { UserEntity } from 'src/user/entities/user.entity';
export declare class MovieEntity {
    id: string;
    movieTitle: string;
    movieDescription: string;
    releaseYear: number;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
    createdByUser: UserEntity;
}
