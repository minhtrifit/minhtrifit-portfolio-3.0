import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { TechnicalType } from 'src/types';

export type ProjectDocument = HydratedDocument<Project>;

@Schema()
export class Project {
  @Prop({ type: String, default: uuidv4 })
  id: string;

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  github: string;

  @Prop({ type: [{ type: String }] })
  images: string[];

  @Prop({ type: [{ type: Object }] })
  technicals: TechnicalType[];

  @Prop()
  demo: string;

  @Prop()
  released: string;

  @Prop({ type: [{ type: String }] })
  features: string[];

  @Prop({ type: [{ type: String }] })
  categories: string[];
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
