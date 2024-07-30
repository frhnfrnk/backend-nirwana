import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Peternakan extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  latitude: number;

  @Prop({ required: true })
  longitude: number;

  @Prop({ required: false })
  image: string[];

  @Prop({ required: true })
  desa: string;

  @Prop({ required: true })
  jantan_dewasa: number;

  @Prop({ required: true })
  betina_dewasa: number;

  @Prop({ required: true })
  jantan_anakan: number;

  @Prop({ required: true })
  betina_anakan: number;

  @Prop({ required: true })
  total: number;

  @Prop({ required: true })
  kondisi_hewan: string;

  @Prop({ required: true })
  kondisi_kandang: string;

  @Prop({ required: true })
  status_vaksinasi: string;

  @Prop({ required: true })
  obat_cacing: string;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const PeternakanSchema = SchemaFactory.createForClass(Peternakan);
