import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {HydratedDocument} from "mongoose";

export type CategoryDocument = HydratedDocument<Category>;

@Schema()
export class Category {
  @Prop()
  keyword: string;
  @Prop()
  title: string;
  @Prop()
  title_kk: string;
  @Prop()
  is_content: boolean;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
