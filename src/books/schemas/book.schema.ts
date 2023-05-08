import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book {
  @Prop()
  chapter: string;
  @Prop()
  ISBN: string;
  @Prop()
  height: string;
  @Prop()
  page_count: string;
  @Prop()
  present_house_description: string;
  @Prop()
  category_name_ru: string;
  @Prop()
  width: string;
  @Prop()
  title: string;
  @Prop()
  category: string;
  @Prop()
  chapter_name_ru: string;
  @Prop()
  addedTime: string;
  @Prop()
  count: number;
  @Prop()
  series: string;
  @Prop()
  img_author_url: string;
  @Prop()
  date: string;
  @Prop()
  present_house: string;
  @Prop()
  description_ru: string;
  @Prop()
  catalog: string;
  @Prop()
  addedDate: string;
  @Prop()
  img_url: string;
  @Prop()
  old_price: string;
  @Prop()
  author_info_ru: string;
  @Prop()
  chapter_name_kz: string;
  @Prop()
  description_kz: string;
  @Prop()
  catalog_name_kz: string;
  @Prop()
  present_house_description_kz: string;
  @Prop()
  author: string;
  @Prop()
  catalog_name_ru: string;
  @Prop()
  author_info_kz: string;
  @Prop()
  sku: string;
  @Prop()
  price: string;
  @Prop()
  category_name_kz: string;
  @Prop()
  language: string;
  @Prop()
  thickness: string;
  @Prop()
  id: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
