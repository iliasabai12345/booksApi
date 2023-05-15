import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {HydratedDocument} from "mongoose";

export type LocationDocument = HydratedDocument<Location>;

@Schema()
export class Location {
  @Prop()
  title: string;
  @Prop()
  location_id: number;
}

export const LocationSchema = SchemaFactory.createForClass(Location);
