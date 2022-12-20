"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviesService = void 0;
const common_1 = require("@nestjs/common");
const movie_repository_1 = require("./repository/movie.repository");
let MoviesService = class MoviesService {
    constructor(movieRepository) {
        this.movieRepository = movieRepository;
    }
    async createMovieService(movieData) {
        const movieCreated = this.movieRepository.createMovie(movieData);
        return movieCreated;
    }
    async findAll() {
        const allMovies = await this.movieRepository.getAllMovies();
        return allMovies;
    }
    async findOne(movieId) {
        const movieFound = await this.movieRepository.getMovieById(movieId);
        return movieFound;
    }
    async update(movieData, idMovie) {
        await this.movieRepository.updateMovie(movieData, idMovie);
        const movieUpdated = await this.findOne(movieData.id);
        return movieUpdated;
    }
    async remove(id) {
        const movieExists = await this.movieRepository.deleteMovie(id);
        if (movieExists) {
            return true;
        }
        else {
            return false;
        }
    }
};
MoviesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [movie_repository_1.MovieRepository])
], MoviesService);
exports.MoviesService = MoviesService;
//# sourceMappingURL=movies.service.js.map