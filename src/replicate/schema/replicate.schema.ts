import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type ReplicateDocument = Replicate & Document;

@Schema()
export class Replicate {
  @ApiProperty()
  @Prop()
  prompt: string;

  @ApiProperty()
  @Prop()
  userId: string;

  @ApiProperty()
  @Prop()
  artists: string[];

  @ApiProperty()
  @Prop()
  createdAt: Date;

  @ApiProperty()
  @Prop()
  updatedAt: Date;
}

export const ReplicateSchema = SchemaFactory.createForClass(Replicate);
