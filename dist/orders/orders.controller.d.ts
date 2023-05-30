import { UpdateCartDto } from "src/cart/dto/update-cart.dto";
import { Cart } from "src/cart/schemas/cart.schema";
import { OrdersService } from "src/orders/orders.service";
import { Order } from "src/orders/schemas/order.schema";
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    getAll(): Promise<{
        code: number;
        data: Order[];
        message: string;
    }>;
    getOne(id: string): Promise<{
        code: number;
        data: Order[];
        message: string;
    }>;
    create(createBookDto: any): Promise<{
        code: number;
        data: Order;
        message: string;
    }>;
    update(id: any, updateCartDto: UpdateCartDto): Promise<{
        code: number;
        data: Cart;
        message: string;
    }>;
}
