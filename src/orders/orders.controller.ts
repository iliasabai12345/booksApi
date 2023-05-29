import {Body, Controller, Get, HttpCode, HttpStatus, Param, Post} from '@nestjs/common';
import {ApiBody, ApiTags} from "@nestjs/swagger";
import {CreateBookDto} from "src/books/dto/create-book.dto";
import {OrdersService} from "src/orders/orders.service";
import {Order} from "src/orders/schemas/order.schema";

@Controller('orders')
@ApiTags("Orders")
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) {
    }

    @Get("getOrders")
    // @CacheKey(RS_BOOKS)
    // @CacheTTL(RS_TTL_BOOKS)
    getAll(): Promise<{ code: number; data: Order[]; message: string }> {
        return this.ordersService.getAll();
    }

    @Get("getOrders/:id")
    @HttpCode(HttpStatus.OK)
    getOne(@Param("id") id: string): Promise<{ code: number; data: Order[]; message: string }> {
        return this.ordersService.getUserAll(id);
    }

    //Запись данных
    @Post("addOrder")
    @ApiBody({type: CreateBookDto})

    create(@Body() createBookDto: any): Promise<{ code: number; data: Order; message: string }> {
        return this.ordersService.create(createBookDto);
    }
}
