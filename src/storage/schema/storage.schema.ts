import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type StorageDocument = Storage & Document;

@Schema()
export class Storage {
  @ApiProperty({
    description: 'The metadata of the NFT',
    example: {
      name: 'NFT #1',
      description: 'This is my first NFT',
      // Here we add a file into the image property of our metadata
      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAA',
      properties: [
        {
          name: 'coolness',
          value: 'very cool',
        },
      ],
    },
  })
  @Prop()
  metadata: string;
}

export const StorageSchema = SchemaFactory.createForClass(Storage);
