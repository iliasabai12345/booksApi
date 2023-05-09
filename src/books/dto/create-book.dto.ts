import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateBookDto {
  @IsEmail()
  @ApiProperty({
    description: "Название книги",
    default: "Словно мы злодеи",
    type: String
  })
  readonly title: string;
  @IsNotEmpty()
  @ApiProperty({
    description: "Цена книги",
    default: 4831,
    type: Number
  })
  readonly price: number;
}
