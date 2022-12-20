import { AuthService } from './auth.service';
import { TypeBody } from '../auth/dto/authBodyType';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(body: TypeBody): Promise<{
        token: string;
    }>;
}
