import { UserEntity } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { TypeBody } from './dto/authBodyType';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    login(user: TypeBody): Promise<{
        token: string;
    }>;
    validateUser(email: string, password: string): Promise<UserEntity>;
}
