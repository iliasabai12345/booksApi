"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBookDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateBookDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "ISBN книги",
        default: "978-5-4461-0772-8",
        type: String
    }),
    __metadata("design:type", String)
], CreateBookDto.prototype, "ISBN", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Высота книги",
        default: "210 мм",
        type: String
    }),
    __metadata("design:type", String)
], CreateBookDto.prototype, "height", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Количество страниц книги",
        default: "356",
        type: String
    }),
    __metadata("design:type", String)
], CreateBookDto.prototype, "page_count", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Информация об издательстве",
        default: "Сегодня «Питер» — это ведущее российское издательство, специализирующееся на выпуске литературы нон-фикшн.",
        type: String
    }),
    __metadata("design:type", String)
], CreateBookDto.prototype, "present_house_description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Название категорий",
        default: "Подарочные издания",
        type: String
    }),
    __metadata("design:type", String)
], CreateBookDto.prototype, "category_name_ru", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Ширина книги",
        default: "100 мм",
        type: String
    }),
    __metadata("design:type", String)
], CreateBookDto.prototype, "width", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Название книги",
        default: "Словно мы злодеи",
        type: String
    }),
    __metadata("design:type", String)
], CreateBookDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Категорий книги",
        default: "gift_editions",
        type: String
    }),
    __metadata("design:type", String)
], CreateBookDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Группа книги",
        default: "Дом. Семья. Досуг",
        type: String
    }),
    __metadata("design:type", String)
], CreateBookDto.prototype, "chapter_name_ru", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Дата добавления книги",
        default: "1670324755672",
        type: String
    }),
    __metadata("design:type", String)
], CreateBookDto.prototype, "addedTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Количество наличий товара",
        default: "5",
        type: Number
    }),
    __metadata("design:type", Number)
], CreateBookDto.prototype, "count", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Серия книги",
        default: "Фрам",
        type: String
    }),
    __metadata("design:type", String)
], CreateBookDto.prototype, "series", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Изображение автора",
        default: "https://cdn.f.kz/media/people/1518.jpg",
        type: String
    }),
    __metadata("design:type", String)
], CreateBookDto.prototype, "img_author_url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Год издание книги",
        default: "2009",
        type: String
    }),
    __metadata("design:type", String)
], CreateBookDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Издательство книги",
        default: "ТИД Амфора",
        type: String
    }),
    __metadata("design:type", String)
], CreateBookDto.prototype, "present_house", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Описание книги на русском",
        default: "Большая Медведица, третье по размерам созвездие неба",
        type: String
    }),
    __metadata("design:type", String)
], CreateBookDto.prototype, "description_ru", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Каталог книги",
        default: "antidepressant_books",
        type: String
    }),
    __metadata("design:type", String)
], CreateBookDto.prototype, "catalog", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Дата добавления",
        default: "2022-12-06T11:05:55.672Z",
        type: String
    }),
    __metadata("design:type", String)
], CreateBookDto.prototype, "addedDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Изображение книги",
        default: "https://cdn.f.kz/prod/121/120152_550.jpg",
        type: String
    }),
    __metadata("design:type", String)
], CreateBookDto.prototype, "img_url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Старая цена книги",
        default: "1 460 ₸",
        type: String
    }),
    __metadata("design:type", String)
], CreateBookDto.prototype, "old_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Описание об авторе книги",
        default: "Николай Васильевич Гоголь (фамилия при рождении Яновский",
        type: String
    }),
    __metadata("design:type", String)
], CreateBookDto.prototype, "author_info_ru", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Название группы на казахском",
        default: "Танымал психология 2022",
        type: String
    }),
    __metadata("design:type", String)
], CreateBookDto.prototype, "chapter_name_kz", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Описание книги на казахском",
        default: "Қырық жыл бұрын бұл ғылыми фантастика болып саналды",
        type: String
    }),
    __metadata("design:type", String)
], CreateBookDto.prototype, "description_kz", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Название каталога на казахском",
        default: "Антидепрессанттар кітаптары",
        type: String
    }),
    __metadata("design:type", String)
], CreateBookDto.prototype, "catalog_name_kz", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Описание издательство на казахском",
        default: "«Эксмо» компаниясы 1991 жылы кітап өнімдерінің дистрибьюторы",
        type: String
    }),
    __metadata("design:type", String)
], CreateBookDto.prototype, "present_house_description_kz", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Автор книги",
        default: "Д. Киз",
        type: String
    }),
    __metadata("design:type", String)
], CreateBookDto.prototype, "author", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Название каталога на русском",
        default: "Книги антидепресанты",
        type: String
    }),
    __metadata("design:type", String)
], CreateBookDto.prototype, "catalog_name_ru", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Описание автора на казахском",
        default: "Дэниел Кейс - американдық жазушы және лингвист",
        type: String
    }),
    __metadata("design:type", String)
], CreateBookDto.prototype, "author_info_kz", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Код товара",
        default: "45665642",
        type: String
    }),
    __metadata("design:type", String)
], CreateBookDto.prototype, "sku", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Цена книги",
        default: "1 460 ₸",
        type: String
    }),
    __metadata("design:type", Number)
], CreateBookDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Название категорий на казахском",
        default: "Көркем әдебиет",
        type: String
    }),
    __metadata("design:type", String)
], CreateBookDto.prototype, "category_name_kz", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Язык книги",
        default: "русский",
        type: String
    }),
    __metadata("design:type", String)
], CreateBookDto.prototype, "language", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Толщина книги",
        default: "25 мм",
        type: String
    }),
    __metadata("design:type", String)
], CreateBookDto.prototype, "thickness", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Идентификатор книги",
        default: "4566412",
        type: String
    }),
    __metadata("design:type", String)
], CreateBookDto.prototype, "id", void 0);
exports.CreateBookDto = CreateBookDto;
//# sourceMappingURL=create-book.dto.js.map