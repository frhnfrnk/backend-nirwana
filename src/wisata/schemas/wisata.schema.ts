// src/schemas/wisata.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Desa } from 'src/desa/schema/desa.schema';

@Schema()
export class Wisata extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  latitude: number;

  @Prop({ required: true })
  longitude: number;

  @Prop({ required: true })
  image: string[];

  @Prop({ type: Types.ObjectId, ref: 'Desa', required: true })
  desa: Desa;
}

export const WisataSchema = SchemaFactory.createForClass(Wisata);
