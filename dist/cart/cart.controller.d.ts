import { CartService } from "src/cart/cart.service";
import { CreateCartDto } from "src/cart/dto/create-cart.dto";
import { UpdateCartDto } from "src/cart/dto/update-cart.dto";
import { Cart } from "src/cart/schemas/cart.schema";
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    getOne(id: string): Promise<{
        code: number;
        data: Cart[];
        message: string;
    }>;
    create(createCartDto: CreateCartDto): Promise<{
        code: number;
        data: Cart;
        message: string;
    }>;
    remove(id: string, user_id: string): Promise<{
        code: number;
        data: {
            deleted: Cart;
            products: Cart[];
        };
        message: string;
    }>;
    update(id: any, updateCartDto: UpdateCartDto): Promise<{
        code: number;
        data: Cart;
        message: string;
    }>;
}
