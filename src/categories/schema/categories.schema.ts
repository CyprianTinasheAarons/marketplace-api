import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
  @ApiProperty({ example: 'Digital Art' })
  @Prop()
  name: string;

  @ApiProperty({ example: 'Various digital art collections.' })
  @Prop()
  description: string;

  @ApiProperty({ example: 'https://example.com/image.jpg' })
  @Prop()
  image: string;

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

export const CategorySchema = SchemaFactory.createForClass(Category);
