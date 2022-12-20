import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/createUser.dto';
import { UpdateUserDto } from '../dto/updateUser.dto';
import { UserEntity } from '../entities/user.entity';
export declare class UserRepository {
    private readonly typeOrmRepository;
    constructor(typeOrmRepository: Repository<UserEntity>);
    createUser(userData: CreateUserDto): Promise<UserEntity>;
    updateUser(userData: UpdateUserDto, idUser: string): Promise<UserEntity>;
    deleteUser(userId: string): Promise<UserEntity>;
    getUserById(userId: string): Promise<UserEntity>;
    getAllUsersRepository(): Promise<UserEntity[]>;
    getOneUserOrFail(userEmail: string): Promise<UserEntity>;
}
