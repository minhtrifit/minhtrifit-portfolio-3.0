import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { UserType } from 'src/types';

export type ProjectDocument = HydratedDocument<Comment>;

@Schema()
export class Comment {
  @Prop({ type: String, default: uuidv4 })
  id: string;

  @Prop()
  projectId: string;

  @Prop()
  title: string;

  @Prop({ type: Object })
  user: UserType;

  @Prop()
  timestamp: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
