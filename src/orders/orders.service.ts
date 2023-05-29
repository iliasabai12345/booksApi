import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Order, OrderDocument} from "src/orders/schemas/order.schema";

@Injectable()
export class OrdersService {
    constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>
    ) {
    }


    async getAll(): Promise<{ code: number, data: Order[], message: string }> {
        try {
            const data = await this.orderModel.find().exec();
            return {
                code: 0,
                data,
                message: "Заказы успешно загружены"
            };
        } catch (e) {
            return {
                code: 1,
                data: [],
                message: e
            };
        }
    }

    async getUserAll(user_id): Promise<{ code: number, data: Order[], message: string }> {
        try {
            const data = await this.orderModel.find({user_id});
            return {
                code: 0,
                data,
                message: "Заказы успешно загружены"
            };
        } catch (e) {
            return {
                code: 1,
                data: [],
                message: e
            };
        }
    }

    async create(createBookDto: any): Promise<{ code: number, data: Order, message: string }> {
        try {
            const newOrder = new this.orderModel(createBookDto);
            const data = await newOrder.save();
            return {
                code: 0,
                data,
                message: `Заказ успешно создан`
            };
        } catch (e) {
            return {
                code: 1,
                data: null,
                message: e
            };
        }
    }
}
