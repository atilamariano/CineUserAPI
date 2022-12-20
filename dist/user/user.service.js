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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_repository_1 = require("./repository/user.repository");
const bcrypt_1 = require("bcrypt");
const Exception_1 = require("../exceptions/Exception");
const exceptionsHelper_1 = require("../exceptions/exceptionsHelper");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async createUserService(data) {
        try {
            data.userPassword = (0, bcrypt_1.hashSync)(data.userPassword, 10);
            const userEntityCreated = await this.userRepository.createUser(data);
            return userEntityCreated;
        }
        catch (err) {
            throw new Exception_1.ExceptionClass(exceptionsHelper_1.Exceptions.InvalidData, 'Error creating user. Please verify the data sent.');
        }
    }
    async updateUserService(userData, idUser) {
        const userUpdated = await this.userRepository.updateUser(userData, idUser);
        return userUpdated;
    }
    async getUserById(userId) {
        const userFound = await this.userRepository.getUserById(userId);
        delete userFound.userPassword;
        return userFound;
    }
    async getOneUserOrFail(userEmail) {
        const user = await this.userRepository.getOneUserOrFail(userEmail);
        return user;
    }
    async getAllUsersService() {
        const allUsers = await this.userRepository.getAllUsersRepository();
        return allUsers;
    }
    async deleteUserService(userId) {
        const userExists = await this.userRepository.deleteUser(userId);
        if (userExists) {
            return true;
        }
        else {
            return false;
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map