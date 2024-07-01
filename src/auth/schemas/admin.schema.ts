import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Schema()
export class Admin extends Document {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  async comparePassword(attempt: string): Promise<boolean> {
    return await bcrypt.compare(attempt, this.password);
  }
}

export const AdminSchema = SchemaFactory.createForClass(Admin);

AdminSchema.pre('save', async function (next: Function) {
  try {
    if (!this.isModified('password')) {
      return next();
    }
    this['password'] = await bcrypt.hash(this['password'], 10);
    return next();
  } catch (err) {
    return next(err);
  }
});
