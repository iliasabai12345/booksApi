import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {HydratedDocument} from "mongoose";
import {Book} from "src/books/schemas/book.schema";

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
  @Prop()
  address: string;
  @Prop()
  city: string;
  @Prop()
  comment: string;
  @Prop()
  date: string;
  @Prop()
  delivery_type: string;
  @Prop()
  flat: string;
  @Prop()
  house: string;
  @Prop()
  pay_type: string;
  @Prop()
  phone_number: number;
  @Prop()
  products: Book[];
  @Prop()
  time: number;
  @Prop()
  total_sum: number;
  @Prop()
  user_id: string;
  @Prop()
  user_name: string;

}

export const OrderSchema = SchemaFactory.createForClass(Order);
