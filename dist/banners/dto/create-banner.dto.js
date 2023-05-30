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
exports.CreateBannerDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateBannerDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Название баннера",
        default: "Чистая архитектура. Искусство разработки программного обеспечения",
        type: String
    }),
    __metadata("design:type", String)
], CreateBannerDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Изображение баннера",
        default: "https://cdn.f.kz/prod/1104/1103285_550.jpg",
        type: String
    }),
    __metadata("design:type", String)
], CreateBannerDto.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Активный ли баннер",
        default: "http://product/3561478",
        type: Boolean
    }),
    __metadata("design:type", Boolean)
], CreateBannerDto.prototype, "isActive", void 0);
exports.CreateBannerDto = CreateBannerDto;
//# sourceMappingURL=create-banner.dto.js.map