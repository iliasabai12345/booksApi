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
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const order_schema_1 = require("./schemas/order.schema");
let OrdersService = class OrdersService {
    constructor(orderModel) {
        this.orderModel = orderModel;
    }
    async getAll() {
        try {
            const data = await this.orderModel.find().exec();
            return {
                code: 0,
                data,
                message: "Заказы успешно загружены"
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
    async getUserAll(user_id) {
        try {
            const data = await this.orderModel.find({ user_id });
            return {
                code: 0,
                data,
                message: "Заказы успешно загружены"
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
    async create(createBookDto) {
        try {
            const newOrder = new this.orderModel(createBookDto);
            const data = await newOrder.save();
            return {
                code: 0,
                data,
                message: `Заказ успешно создан`
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
    async change(id, updateCartDto) {
        try {
            const data = await this.orderModel.findByIdAndUpdate(id, updateCartDto, { new: true });
            return {
                code: 0,
                data,
                message: `Заказ успешно отменен`
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
OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(order_schema_1.Order.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], OrdersService);
exports.OrdersService = OrdersService;
//# sourceMappingURL=orders.service.js.map