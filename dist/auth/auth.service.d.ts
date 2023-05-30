import { Model } from "mongoose";
import { CreateUserDto } from "src/auth/dto/create-user.dto";
import { User, UserDocument } from "src/auth/schemas/user.schema";
export declare class AuthService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    getOne(username: any, password: any): Promise<{
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
