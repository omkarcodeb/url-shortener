import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UrlShortnerDocument = HydratedDocument<UrlShortner>;

@Schema()
export class UrlShortner {
  @Prop({required: true})
  url: string;

  @Prop({required: true, unique: true})
  shortUrl: string;
}

export const UrlShortnerSchema = SchemaFactory.createForClass(UrlShortner);
