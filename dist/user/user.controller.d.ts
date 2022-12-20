import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { UserEntity } from './entities/user.entity';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUserController(body: CreateUserDto): Promise<UserEntity>;
    updateUserController(userData: UpdateUserDto, userId: string): Promise<UserEntity>;
    getAllUsersController(): Promise<UserEntity[]>;
    getUserByIdController(userId: string): Promise<UserEntity>;
    deleteUserController(userId: string): Promise<string>;
}
