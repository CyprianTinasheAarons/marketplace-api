import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type ReplicateDocument = Replicate & Document;

@Schema()
export class Replicate {
  @ApiProperty({ example: 'Create an AI-generated artwork' })
  @Prop()
  prompt: string;

  @ApiProperty({ example: 'user123' })
  @Prop()
  userId: string;

  @ApiProperty({ example: ['artist1', 'artist2', 'artist3'] })
  @Prop()
  artists: string[];

  @ApiProperty({
    example: '2022-02-01T00:12:34Z',
    type: 'string',
    format: 'date-time',
  })
  @Prop()
  createdAt: Date;

  @ApiProperty({
    example: '2022-02-01T05:12:34Z',
    type: 'string',
    format: 'date-time',
  })
  @Prop()
  updatedAt: Date;
}

export const ReplicateSchema = SchemaFactory.createForClass(Replicate);
