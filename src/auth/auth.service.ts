import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {CreateUserDto} from "src/auth/dto/create-user.dto";
import {User, UserDocument} from "src/auth/schemas/user.schema";

@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
    }

    async getOne(username, password): Promise<{ code: number, data: User, message: string }> {
        try {
            const data = await this.userModel.findOne({username});
            if (data.password !== password) {
                return {
                    code: 1,
                    data: null,
                    message: `Неправильный пароль`
                };
            }
            return {
                code: 0,
                data,
                message: `Добро пожаловать ${data.username}`
            };
        } catch (e) {
            return {
                code: 1,
                data: null,
                message: `Не удалось найти пользователя ${username}`
            };
        }
    }


    async create(createUserDto: CreateUserDto): Promise<{ code: number, data: User, message: string }> {
        try {
            const checkUser = await this.userModel.findOne({username: createUserDto.username});
            if (checkUser) {
                return {
                    code: 1,
                    data: null,
                    message: `Пользователь с именем ${checkUser.username} уже существует`
                };
            }
            const newUser = new this.userModel(createUserDto);
            const data = await newUser.save();
            return {
                code: 0,
                data,
                message: `Пользователь ${data.username} успешно авторизовался!`
            };
        } catch (e) {
            return {
                code: 1,
                data: null,
                message: e
            };
        }
    }
}
