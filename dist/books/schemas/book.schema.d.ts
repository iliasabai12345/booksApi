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
export type BookDocument = HydratedDocument<Book>;
export declare class Book {
    chapter: string;
    ISBN: string;
    height: string;
    page_count: string;
    present_house_description: string;
    category_name_ru: string;
    width: string;
    title: string;
    category: string;
    chapter_name_ru: string;
    addedTime: string;
    count: number;
    series: string;
    img_author_url: string;
    date: string;
    present_house: string;
    description_ru: string;
    catalog: string;
    addedDate: string;
    img_url: string;
    old_price: string;
    author_info_ru: string;
    chapter_name_kz: string;
    description_kz: string;
    catalog_name_kz: string;
    present_house_description_kz: string;
    author: string;
    catalog_name_ru: string;
    author_info_kz: string;
    sku: string;
    price: string;
    category_name_kz: string;
    language: string;
    thickness: string;
    id: string;
}
export declare const BookSchema: import("mongoose").Schema<Book, import("mongoose").Model<Book, any, any, any, import("mongoose").Document<unknown, any, Book> & Omit<Book & {
    _id: import("mongoose").Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Book, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Book>> & Omit<import("mongoose").FlatRecord<Book> & {
    _id: import("mongoose").Types.ObjectId;
}, never>>;
