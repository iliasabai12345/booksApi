import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {HydratedDocument} from "mongoose";

export type BannerDocument = HydratedDocument<Banner>;

@Schema()
export class Banner {
    @Prop()
    title: string;
    @Prop()
    image: string;
    @Prop()
    isActive: boolean;
}

export const BannerSchema = SchemaFactory.createForClass(Banner);
