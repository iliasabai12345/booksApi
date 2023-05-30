/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { HydratedDocument } from "mongoose";
import { Book } from "src/books/schemas/book.schema";
export type OrderDocument = HydratedDocument<Order>;
export declare class Order {
    address: string;
    city: string;
    comment: string;
    date: string;
    delivery_type: string;
    flat: string;
    house: string;
    pay_type: string;
    phone_number: number;
    products: Book[];
    time: number;
    total_sum: number;
    user_id: string;
    user_name: string;
    order_status: string;
}
export declare const OrderSchema: import("mongoose").Schema<Order, import("mongoose").Model<Order, any, any, any, import("mongoose").Document<unknown, any, Order> & Omit<Order & {
    _id: import("mongoose").Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Order, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Order>> & Omit<import("mongoose").FlatRecord<Order> & {
    _id: import("mongoose").Types.ObjectId;
}, never>>;
