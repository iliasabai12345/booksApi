import {ApiProperty} from "@nestjs/swagger";

export class CreateCategoryDto {
  @ApiProperty({
    description: "Keyword категорий",
    default: "gift_editions",
    type: String
  })
  readonly keyword: string;

  @ApiProperty({
    description: "Название категорий категорий",
    default: "Подарочные издания",
    type: String
  })
  readonly title: string;
  @ApiProperty({
    description: "Название категорий категорий",
    default: "Сыйлық басылымдары",
    type: String
  })
  readonly title_kk: string;
  @ApiProperty({
    description: "Наличие в контенте",
    default: false,
    type: Boolean
  })
  readonly is_content: string;
}

