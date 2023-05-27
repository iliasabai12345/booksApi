import {Module} from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {OrdersController} from "src/orders/orders.controller";
import {Order, OrderSchema} from "src/orders/schemas/order.schema";
import {OrdersService} from './orders.service';

@Module({
    imports: [MongooseModule.forFeature([{name: Order.name, schema: OrderSchema}])],
    providers: [OrdersService],
    controllers: [OrdersController]
})
export class OrdersModule {
}
