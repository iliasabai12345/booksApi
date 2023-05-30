import { AuthService } from "src/auth/auth.service";
import { CreateUserDto } from "src/auth/dto/create-user.dto";
import { User } from "src/auth/schemas/user.schema";
export declare class AuthController {
    private readonly authsService;
    constructor(authsService: AuthService);
    getOne(username: string, password: string): Promise<{
        code: number;
        data: User;
        message: string;
    }>;
    create(createUserDto: CreateUserDto): Promise<{
        code: number;
        data: User;
        message: string;
    }>;
}
