import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type ProjectDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ type: String, default: uuidv4 })
  id: string;

  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  avatar: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
