import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put} from '@nestjs/common';
import {ApiBody, ApiCreatedResponse, ApiTags} from "@nestjs/swagger";
import {CreateBookDto} from "src/books/dto/create-book.dto";
import {CartService} from "src/cart/cart.service";
import {CreateCartDto} from "src/cart/dto/create-cart.dto";
import {UpdateCartDto} from "src/cart/dto/update-cart.dto";
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

    // Delete book
    @Delete("deleteProductOfCart/:id/:user_id")
    @ApiCreatedResponse({
        description: 'Удаление книги с базы',
        type: CreateBookDto,
    })
    remove(@Param("id") id: string, @Param("user_id") user_id: string): Promise<{ code: number; data: { deleted: Cart, products: Cart[] }; message: string }> {
        return this.cartService.remove(id, user_id);
    }


    // Update book
    @Put("changeProductQty/:id/")
    update(@Param("id") id, @Body() updateCartDto: UpdateCartDto): Promise<{ code: number; data: Cart; message: string }> {
        return this.cartService.changeQty(id, updateCartDto);
    }
}
