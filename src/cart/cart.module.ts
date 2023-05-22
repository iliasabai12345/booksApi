import {Module} from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {CartController} from "src/cart/cart.controller";
import {Cart, CartSchema} from "src/cart/schemas/cart.schema";
import {CartService} from './cart.service';

@Module({
    imports: [MongooseModule.forFeature([{name: Cart.name, schema: CartSchema}])],
    providers: [CartService],
    controllers: [CartController],

})
export class CartModule {
}
