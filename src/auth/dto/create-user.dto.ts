import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({
    description: "Имя пользователя",
    default: "Илияс",
    type: String
  })
  readonly username: string;

  @ApiProperty({
    description: "Пароль пользователя",
    default: "123456789",
    type: String
  })
  readonly password: string;
}

