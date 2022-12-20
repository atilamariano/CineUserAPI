import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
export declare class MoviesController {
    private readonly moviesService;
    constructor(moviesService: MoviesService);
    createMovieController(createMovieDto: CreateMovieDto): Promise<import("./entities/movie.entity").MovieEntity>;
    findAll(): Promise<import("./entities/movie.entity").MovieEntity[]>;
    findOne(id: string): Promise<import("./entities/movie.entity").MovieEntity>;
    update(movieId: string, updateMovieDto: UpdateMovieDto): Promise<import("./entities/movie.entity").MovieEntity>;
    remove(id: string): Promise<boolean>;
}
