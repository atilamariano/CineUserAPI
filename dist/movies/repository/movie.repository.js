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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const movie_entity_1 = require("../entities/movie.entity");
let MovieRepository = class MovieRepository {
    constructor(typeOrmRepository) {
        this.typeOrmRepository = typeOrmRepository;
    }
    async createMovie(movieData) {
        const movieCreated = await this.typeOrmRepository.save(movieData);
        if (!movieCreated) {
            throw new Error('Erro ao criar o filme.');
        }
        else {
            return movieCreated;
        }
    }
    async updateMovie(movieData, idMovie) {
        const movieToUpdate = await this.getMovieById(idMovie);
        this.typeOrmRepository.merge(movieToUpdate, movieData);
        return await this.typeOrmRepository.save(movieToUpdate);
    }
    async deleteMovie(movieId) {
        const movieToDelete = await this.getMovieById(movieId);
        if (!movieToDelete) {
            throw new Error('Filme não encontrado.');
        }
        await this.typeOrmRepository.softDelete(movieId);
        return true;
    }
    async getMovieById(movieId) {
        const movieFound = await this.typeOrmRepository.findOne({
            where: { id: movieId },
            relations: { createdByUser: true },
        });
        return movieFound;
    }
    async getAllMovies() {
        const allMovies = await this.typeOrmRepository.find({
            relations: { createdByUser: true },
        });
        return allMovies;
    }
};
MovieRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(movie_entity_1.MovieEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MovieRepository);
exports.MovieRepository = MovieRepository;
//# sourceMappingURL=movie.repository.js.map