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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BannersController = void 0;
const cache_manager_1 = require("@nestjs/cache-manager");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const redis_1 = require("../shared/constants/redis");
const banners_service_1 = require("./banners.service");
const create_banner_dto_1 = require("./dto/create-banner.dto");
let BannersController = class BannersController {
    constructor(bannersService) {
        this.bannersService = bannersService;
    }
    getAll() {
        return this.bannersService.getAll();
    }
    create(createBannerDto) {
        return this.bannersService.create(createBannerDto);
    }
};
__decorate([
    (0, common_1.Get)("getBanners"),
    (0, cache_manager_1.CacheKey)(redis_1.RS_BANNERS),
    (0, cache_manager_1.CacheTTL)(redis_1.RS_TTL_BOOKS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BannersController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)("addBanner"),
    (0, swagger_1.ApiBody)({ type: create_banner_dto_1.CreateBannerDto }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'Запись баннера на базу .',
        type: create_banner_dto_1.CreateBannerDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_banner_dto_1.CreateBannerDto]),
    __metadata("design:returntype", Promise)
], BannersController.prototype, "create", null);
BannersController = __decorate([
    (0, common_1.Controller)('banners'),
    (0, swagger_1.ApiTags)("banners"),
    __metadata("design:paramtypes", [banners_service_1.BannersService])
], BannersController);
exports.BannersController = BannersController;
//# sourceMappingURL=banners.controller.js.map