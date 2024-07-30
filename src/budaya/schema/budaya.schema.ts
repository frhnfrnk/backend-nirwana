// src/schemas/Budaya.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Desa } from 'src/desa/schema/desa.schema';

@Schema()
export class Budaya extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  author: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  image: string[];

  @Prop({ required: true })
  desa: string;
}

export const BudayaSchema = SchemaFactory.createForClass(Budaya);
