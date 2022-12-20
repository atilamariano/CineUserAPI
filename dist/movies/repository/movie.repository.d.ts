import { Repository } from 'typeorm';
import { CreateMovieDto } from '../dto/create-movie.dto';
import { UpdateMovieDto } from '../dto/update-movie.dto';
import { MovieEntity } from '../entities/movie.entity';
export declare class MovieRepository {
    private readonly typeOrmRepository;
    constructor(typeOrmRepository: Repository<MovieEntity>);
    createMovie(movieData: CreateMovieDto): Promise<MovieEntity>;
    updateMovie(movieData: UpdateMovieDto, idMovie: string): Promise<MovieEntity>;
    deleteMovie(movieId: string): Promise<boolean>;
    getMovieById(movieId: string): Promise<MovieEntity>;
    getAllMovies(): Promise<MovieEntity[]>;
}
