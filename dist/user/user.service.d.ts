import { UserEntity } from './entities/user.entity';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { UserRepository } from './repository/user.repository';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    createUserService(data: CreateUserDto): Promise<UserEntity>;
    updateUserService(userData: UpdateUserDto, idUser: string): Promise<UserEntity>;
    getUserById(userId: string): Promise<UserEntity>;
    getOneUserOrFail(userEmail: string): Promise<UserEntity>;
    getAllUsersService(): Promise<UserEntity[]>;
    deleteUserService(userId: string): Promise<boolean>;
}
