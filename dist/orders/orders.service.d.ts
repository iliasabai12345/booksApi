import { Model } from "mongoose";
import { Order, OrderDocument } from "src/orders/schemas/order.schema";
export declare class OrdersService {
    private orderModel;
    constructor(orderModel: Model<OrderDocument>);
    getAll(): Promise<{
        code: number;
        data: Order[];
        message: string;
    }>;
    getUserAll(user_id: any): Promise<{
        code: number;
        data: Order[];
        message: string;
    }>;
    create(createBookDto: any): Promise<{
        code: number;
        data: Order;
        message: string;
    }>;
    change(id: any, updateCartDto: any): Promise<{
        code: number;
        data: any;
        message: string;
    }>;
}
