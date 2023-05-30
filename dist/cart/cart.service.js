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
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const cart_schema_1 = require("./schemas/cart.schema");
let CartService = class CartService {
    constructor(cartModel) {
        this.cartModel = cartModel;
    }
    async getAll(id) {
        try {
            const data = await this.cartModel.find({ user_id: id });
            return {
                code: 0,
                data,
                message: "Корзина успешно загружена"
            };
        }
        catch (e) {
            return {
                code: 1,
                data: [],
                message: e
            };
        }
    }
    async create(createCartDto) {
        try {
            const current = await this.cartModel.findOne({ sku: createCartDto.sku, user_id: createCartDto.user_id });
            if (current) {
                return {
                    code: 1,
                    data: null,
                    message: `Книга ${createCartDto.title} уже добавлено в корзину!`
                };
            }
            const newCart = new this.cartModel(createCartDto);
            const data = await newCart.save();
            return {
                code: 0,
                data,
                message: `Книга ${data.title} успешно добавлено в корзину!`
            };
        }
        catch (e) {
            return {
                code: 1,
                data: null,
                message: e
            };
        }
    }
    async remove(id, user_id) {
        try {
            const data_deleted = await this.cartModel.findByIdAndDelete(id);
            const data_products = await this.cartModel.find({ user_id });
            return {
                code: 0,
                data: {
                    deleted: data_deleted,
                    products: data_products
                },
                message: `Книга ${data_deleted.title} успешно удалено`
            };
        }
        catch (e) {
            return {
                code: 1,
                data: null,
                message: `Произошла ошибка во время удаления книги`
            };
        }
    }
    async changeQty(id, updateCartDto) {
        try {
            const data = await this.cartModel.findByIdAndUpdate(id, updateCartDto, { new: true });
            return {
                code: 0,
                data,
                message: `Количество товара ${data.title} успешно обновлено!`
            };
        }
        catch (e) {
            return {
                code: 1,
                data: null,
                message: "Произошла ошибка во время обновления книги"
            };
        }
    }
};
CartService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(cart_schema_1.Cart.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CartService);
exports.CartService = CartService;
//# sourceMappingURL=cart.service.js.map