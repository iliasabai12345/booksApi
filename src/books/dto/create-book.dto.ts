import { ApiProperty } from "@nestjs/swagger";

export class CreateBookDto {
  @ApiProperty({
    description: "Название книги",
    default: "Словно мы злодеи",
    type: String
  })
  readonly title: string;
  @ApiProperty({
    description: "Цена книги",
    default: 4831,
    type: String
  })
  readonly price: number;
}
