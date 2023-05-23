import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {HydratedDocument} from "mongoose";

export type CartDocument = HydratedDocument<Cart>;

@Schema()
export class Cart {
  @Prop()
  user_id: string
  @Prop()
  book_id: string
  @Prop()
  qty: number
  @Prop()
  title: string;
  @Prop()
  category: string;
  @Prop()
  count: number;
  @Prop()
  img_url: string;
  @Prop()
  old_price: string;
  @Prop()
  sku: string;
  @Prop()
  price: string;
  @Prop()
  category_name_kz: string;
  @Prop()
  category_name_ru: string;
}

export const CartSchema = SchemaFactory.createForClass(Cart);
