import { ApiProperty } from "@nestjs/swagger";

export class UpdateBookDto {
  @ApiProperty({
    description: "ISBN книги",
    default: "978-5-4461-0772-8",
    type: String
  })
  readonly ISBN: string;

  @ApiProperty({
    description: "Высота книги",
    default: "210 мм",
    type: String
  })
  readonly height: string;

  @ApiProperty({
    description: "Количество страниц книги",
    default: "356",
    type: String
  })
  readonly page_count: string;

  @ApiProperty({
    description: "Информация об издательстве",
    default: "Сегодня «Питер» — это ведущее российское издательство, специализирующееся на выпуске литературы нон-фикшн.",
    type: String
  })
  readonly present_house_description: string;

  @ApiProperty({
    description: "Название категорий",
    default: "Подарочные издания",
    type: String
  })
  readonly category_name_ru: string;

  @ApiProperty({
    description: "Ширина книги",
    default: "100 мм",
    type: String
  })
  readonly width: string;

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
    description: "Группа книги",
    default: "Дом. Семья. Досуг",
    type: String
  })
  readonly chapter_name_ru: string;

  @ApiProperty({
    description: "Дата добавления книги",
    default: "1670324755672",
    type: String
  })
  readonly addedTime: string;

  @ApiProperty({
    description: "Количество наличий товара",
    default: "5",
    type: Number
  })
  readonly count: number;

  @ApiProperty({
    description: "Серия книги",
    default: "Фрам",
    type: String
  })
  readonly series: string;

  @ApiProperty({
    description: "Изображение автора",
    default: "https://cdn.f.kz/media/people/1518.jpg",
    type: String
  })
  readonly img_author_url: string;

  @ApiProperty({
    description: "Год издание книги",
    default: "2009",
    type: String
  })
  readonly date: string;

  @ApiProperty({
    description: "Издательство книги",
    default: "ТИД Амфора",
    type: String
  })
  readonly present_house: string;

  @ApiProperty({
    description: "Описание книги на русском",
    default: "Большая Медведица, третье по размерам созвездие неба",
    type: String
  })
  readonly description_ru: string;

  @ApiProperty({
    description: "Каталог книги",
    default: "antidepressant_books",
    type: String
  })
  readonly catalog: string;

  @ApiProperty({
    description: "Дата добавления",
    default: "2022-12-06T11:05:55.672Z",
    type: String
  })
  readonly addedDate: string;

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
    description: "Описание об авторе книги",
    default: "Николай Васильевич Гоголь (фамилия при рождении Яновский",
    type: String
  })
  readonly author_info_ru: string;

  @ApiProperty({
    description: "Название группы на казахском",
    default: "Танымал психология 2022",
    type: String
  })
  readonly chapter_name_kz: string;

  @ApiProperty({
    description: "Описание книги на казахском",
    default: "Қырық жыл бұрын бұл ғылыми фантастика болып саналды",
    type: String
  })
  readonly description_kz: string;

  @ApiProperty({
    description: "Название каталога на казахском",
    default: "Антидепрессанттар кітаптары",
    type: String
  })
  readonly catalog_name_kz: string;

  @ApiProperty({
    description: "Описание издательство на казахском",
    default: "«Эксмо» компаниясы 1991 жылы кітап өнімдерінің дистрибьюторы",
    type: String
  })
  readonly present_house_description_kz: string;

  @ApiProperty({
    description: "Автор книги",
    default: "Д. Киз",
    type: String
  })
  readonly author: string;

  @ApiProperty({
    description: "Название каталога на русском",
    default: "Книги антидепресанты",
    type: String
  })
  readonly catalog_name_ru: string;

  @ApiProperty({
    description: "Описание автора на казахском",
    default: "Дэниел Кейс - американдық жазушы және лингвист",
    type: String
  })
  readonly author_info_kz: string;

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

  @ApiProperty({
    description: "Язык книги",
    default: "русский",
    type: String
  })
  readonly language: string;

  @ApiProperty({
    description: "Толщина книги",
    default: "25 мм",
    type: String
  })
  readonly thickness: string;

  @ApiProperty({
    description: "Идентификатор книги",
    default: "4566412",
    type: String
  })
  readonly id: string;
}
