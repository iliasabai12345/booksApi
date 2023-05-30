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
exports.CartController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_book_dto_1 = require("../books/dto/create-book.dto");
const cart_service_1 = require("./cart.service");
const create_cart_dto_1 = require("./dto/create-cart.dto");
const update_cart_dto_1 = require("./dto/update-cart.dto");
let CartController = class CartController {
    constructor(cartService) {
        this.cartService = cartService;
    }
    getOne(id) {
        return this.cartService.getAll(id);
    }
    create(createCartDto) {
        return this.cartService.create(createCartDto);
    }
    remove(id, user_id) {
        return this.cartService.remove(id, user_id);
    }
    update(id, updateCartDto) {
        return this.cartService.changeQty(id, updateCartDto);
    }
};
__decorate([
    (0, common_1.Get)("getCart/:id"),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)("addCart"),
    (0, swagger_1.ApiBody)({ type: create_cart_dto_1.CreateCartDto }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'Добавление товара в корзину',
        type: create_book_dto_1.CreateBookDto,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cart_dto_1.CreateCartDto]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)("deleteProductOfCart/:id/:user_id"),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'Удаление книги с базы',
        type: create_book_dto_1.CreateBookDto,
    }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Param)("user_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "remove", null);
__decorate([
    (0, common_1.Put)("changeProductQty/:id/"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_cart_dto_1.UpdateCartDto]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "update", null);
CartController = __decorate([
    (0, common_1.Controller)('cart'),
    (0, swagger_1.ApiTags)("Cart"),
    __metadata("design:paramtypes", [cart_service_1.CartService])
], CartController);
exports.CartController = CartController;
//# sourceMappingURL=cart.controller.js.map