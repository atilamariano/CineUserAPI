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
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Exception_1 = require("../../exceptions/Exception");
const exceptionsHelper_1 = require("../../exceptions/exceptionsHelper");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../entities/user.entity");
let UserRepository = class UserRepository {
    constructor(typeOrmRepository) {
        this.typeOrmRepository = typeOrmRepository;
    }
    async createUser(userData) {
        try {
            const userCreated = await this.typeOrmRepository.save(userData);
            return userCreated;
        }
        catch (err) {
            throw new Exception_1.ExceptionClass(exceptionsHelper_1.Exceptions.DatabaseException, 'Error creating user. Cpf or email already exists.');
        }
    }
    async updateUser(userData, idUser) {
        try {
            const userToUpdate = await this.getUserById(idUser);
            this.typeOrmRepository.merge(userToUpdate, userData);
            return await this.typeOrmRepository.save(userToUpdate);
        }
        catch (err) {
            throw new Exception_1.ExceptionClass(exceptionsHelper_1.Exceptions.DatabaseException, 'Error updating user. Please, verify the data sent.');
        }
    }
    async deleteUser(userId) {
        try {
            const userToDelete = await this.getUserById(userId);
            await this.typeOrmRepository.softDelete(userId);
            return userToDelete;
        }
        catch (err) {
            throw new Exception_1.ExceptionClass(exceptionsHelper_1.Exceptions.DatabaseException, 'Error deleting user. Please verify the ID sent.');
        }
    }
    async getUserById(userId) {
        try {
            const userFound = await this.typeOrmRepository.findOne({
                where: { id: userId },
                relations: { movies: true },
            });
            return userFound;
        }
        catch (err) {
            throw new Exception_1.ExceptionClass(exceptionsHelper_1.Exceptions.DatabaseException, 'Error finding user. Please verify the ID sent.');
        }
    }
    async getAllUsersRepository() {
        const allUsers = await this.typeOrmRepository.find({
            relations: { movies: true },
        });
        return allUsers;
    }
    async getOneUserOrFail(userEmail) {
        try {
            const user = await this.typeOrmRepository.findOne({
                where: { userEmail: userEmail },
            });
            return user;
        }
        catch (err) {
            throw new Error('User not found.');
        }
    }
};
UserRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map