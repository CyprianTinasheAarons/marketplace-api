import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type RegistryDocument = Registry & Document;

@Schema()
export class Registry {
  @ApiProperty({ example: 'John' })
  @Prop()
  firstName: string;

  @ApiProperty({ example: 'Doe' })
  @Prop()
  lastName: string;

  @ApiProperty({ example: '0xc0ffee254729296a45a3885639AC7E10F9d54979' })
  @Prop()
  walletAddress: string;

  @ApiProperty({ example: 'https://example.com' })
  @Prop()
  websiteUrl: string;

  @ApiProperty({ example: 'https://twitter.com/johndoe' })
  @Prop()
  twitterUrl: string;

  @ApiProperty({ example: 'https://instagram.com/johndoe' })
  @Prop()
  instagramUrl: string;

  @ApiProperty({ example: 'https://linkedin.com/in/johndoe' })
  @Prop()
  otherURL: string;

  @ApiProperty({ example: 'John Doe' })
  @Prop()
  artistName: string;

  @ApiProperty({ type: [String], example: ['Artwork1', 'Artwork2'] })
  @Prop()
  artwork: [];

  @ApiProperty({ example: true })
  @Prop()
  acknowledgement: boolean;

  @ApiProperty({ example: true })
  @Prop()
  acknowledgement2: boolean;

  @ApiProperty({ example: false })
  @Prop()
  acknowledgement3: boolean;

  @ApiProperty({ type: [String], example: ['Prompt1', 'Prompt2'] })
  @Prop()
  prompts: [];
}

export const RegistrySchema = SchemaFactory.createForClass(Registry);
