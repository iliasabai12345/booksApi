import {Module} from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {AuthController} from "src/auth/auth.controller";
import {User, UserSchema} from "src/auth/schemas/user.schema";
import {AuthService} from './auth.service';

@Module({
    providers: [AuthService],
    controllers: [AuthController],
    imports: [MongooseModule.forFeature([{name: User.name, schema: UserSchema}])]
})
export class AuthModule {
}
