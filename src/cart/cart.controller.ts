import {Body, Controller, Get, HttpCode, HttpStatus, Param, Post} from '@nestjs/common';
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

    @Get("getCart/:id")
    @HttpCode(HttpStatus.OK)
    getOne(@Param("id") id: string): Promise<{ code: number; data: Cart[]; message: string }> {
        return this.cartService.getAll(id);
    }

    //Запись данных
    @Post("addCart")
    @ApiBody({type: CreateCartDto})
    @ApiCreatedResponse({
        description: 'Добавление товара в корзину',
        type: CreateBookDto,
    })
    create(@Body() createCartDto: CreateCartDto): Promise<{ code: number; data: Cart; message: string }> {
        return this.cartService.create(createCartDto);
    }
}
