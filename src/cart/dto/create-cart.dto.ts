import {ApiProperty} from "@nestjs/swagger";

export class CreateCartDto {

  @ApiProperty({
    description: "Идентификатор пользователя",
    default: "123",
    type: String
  })
  readonly user_id: string;

  @ApiProperty({
    description: "Количество товара в корзине",
    default: "123",
    type: Number
  })
  readonly qty: number;

  @ApiProperty({
    description: "Название категорий",
    default: "Подарочные издания",
    type: String
  })
  readonly category_name_ru: string;

  @ApiProperty({
    description: "Название книги",
    default: "Словно мы злодеи",
    type: String
  })
  readonly title: string;

  @ApiProperty({
    description: "Категорий книги",
    default: "gift_editions",
    type: String
  })
  readonly category: string;

  @ApiProperty({
    description: "Количество наличий товара",
    default: "5",
    type: Number
  })
  readonly count: number;

  @ApiProperty({
    description: "Изображение книги",
    default: "https://cdn.f.kz/prod/121/120152_550.jpg",
    type: String
  })
  readonly img_url: string;

  @ApiProperty({
    description: "Старая цена книги",
    default: "1 460 ₸",
    type: String
  })
  readonly old_price: string;

  @ApiProperty({
    description: "Код товара",
    default: "45665642",
    type: String
  })
  readonly sku: string;

  @ApiProperty({
    description: "Цена книги",
    default: "1 460 ₸",
    type: String
  })
  readonly price: number;

  @ApiProperty({
    description: "Название категорий на казахском",
    default: "Көркем әдебиет",
    type: String
  })
  readonly category_name_kz: string;
}

