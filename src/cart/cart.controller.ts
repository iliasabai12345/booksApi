import {Body, Controller, Post} from '@nestjs/common';
import {ApiBody, ApiCreatedResponse, ApiTags} from "@nestjs/swagger";
import {CreateBookDto} from "src/books/dto/create-book.dto";
import {CartService} from "src/cart/cart.service";
import {CreateCartDto} from "src/cart/dto/create-cart.dto";
import {Cart} from "src/cart/schemas/cart.schema";

@Controller('cart')
@ApiTags("Cart")

export class CartController {
    constructor(private readonly cartService: CartService) {
    }

    //Запись данных
    @Post("addBook")
    @ApiBody({type: CreateCartDto})
    @ApiCreatedResponse({
        description: 'Запись книги на базу .',
        type: CreateBookDto,
    })
    create(@Body() createCartDto: CreateCartDto): Promise<{ code: number; data: Cart; message: string }> {
        return this.cartService.create(createCartDto);
    }
}
