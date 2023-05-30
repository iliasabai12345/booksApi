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
exports.UpdateCartDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class UpdateCartDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Идентификатор пользователя",
        default: "123",
        type: String
    }),
    __metadata("design:type", String)
], UpdateCartDto.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Идентификатор книги",
        default: "123",
        type: String
    }),
    __metadata("design:type", String)
], UpdateCartDto.prototype, "book_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Количество товара в корзине",
        default: "123",
        type: Number
    }),
    __metadata("design:type", Number)
], UpdateCartDto.prototype, "qty", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Название категорий",
        default: "Подарочные издания",
        type: String
    }),
    __metadata("design:type", String)
], UpdateCartDto.prototype, "category_name_ru", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Название книги",
        default: "Словно мы злодеи",
        type: String
    }),
    __metadata("design:type", String)
], UpdateCartDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Категорий книги",
        default: "gift_editions",
        type: String
    }),
    __metadata("design:type", String)
], UpdateCartDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Количество наличий товара",
        default: "5",
        type: Number
    }),
    __metadata("design:type", Number)
], UpdateCartDto.prototype, "count", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Изображение книги",
        default: "https://cdn.f.kz/prod/121/120152_550.jpg",
        type: String
    }),
    __metadata("design:type", String)
], UpdateCartDto.prototype, "img_url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Старая цена книги",
        default: "1 460 ₸",
        type: String
    }),
    __metadata("design:type", String)
], UpdateCartDto.prototype, "old_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Код товара",
        default: "45665642",
        type: String
    }),
    __metadata("design:type", String)
], UpdateCartDto.prototype, "sku", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Цена книги",
        default: "1 460 ₸",
        type: String
    }),
    __metadata("design:type", Number)
], UpdateCartDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Название категорий на казахском",
        default: "Көркем әдебиет",
        type: String
    }),
    __metadata("design:type", String)
], UpdateCartDto.prototype, "category_name_kz", void 0);
exports.UpdateCartDto = UpdateCartDto;
//# sourceMappingURL=update-cart.dto.js.map