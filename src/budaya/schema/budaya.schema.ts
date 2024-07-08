// src/schemas/Budaya.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Desa } from 'src/desa/schema/desa.schema';

@Schema()
export class Budaya extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  image: string;

  @Prop({ type: Types.ObjectId, ref: 'Desa', required: true })
  desa: Desa;
}

export const BudayaSchema = SchemaFactory.createForClass(Budaya);
