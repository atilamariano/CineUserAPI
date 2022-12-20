import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { MovieEntity } from './entities/movie.entity';
import { MovieRepository } from './repository/movie.repository';
export declare class MoviesService {
    private readonly movieRepository;
    constructor(movieRepository: MovieRepository);
    createMovieService(movieData: CreateMovieDto): Promise<MovieEntity>;
    findAll(): Promise<MovieEntity[]>;
    findOne(movieId: string): Promise<MovieEntity>;
    update(movieData: UpdateMovieDto, idMovie: string): Promise<MovieEntity>;
    remove(id: string): Promise<boolean>;
}
