// src/schemas/desa.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Desa extends Document {
  @Prop({ required: true })
  name: string;
}

export const DesaSchema = SchemaFactory.createForClass(Desa);
