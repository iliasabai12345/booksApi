import { Model } from "mongoose";
import { CreateCartDto } from "src/cart/dto/create-cart.dto";
import { UpdateCartDto } from "src/cart/dto/update-cart.dto";
import { Cart, CartDocument } from "src/cart/schemas/cart.schema";
export declare class CartService {
    private cartModel;
    constructor(cartModel: Model<CartDocument>);
    getAll(id: string): Promise<{
        code: number;
        data: Cart[];
        message: string;
    }>;
    create(createCartDto: CreateCartDto): Promise<{
        code: number;
        data: Cart;
        message: string;
    }>;
    remove(id: any, user_id: any): Promise<{
        code: number;
        data: {
            deleted: Cart;
            products: Cart[];
        };
        message: string;
    }>;
    changeQty(id: any, updateCartDto: UpdateCartDto): Promise<{
        code: number;
        data: Cart;
        message: string;
    }>;
}
