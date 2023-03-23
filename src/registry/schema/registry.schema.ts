import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RegistryDocument = Registry & Document;

@Schema()
export class Registry {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;
  @Prop()
  walletAddress: string;

  @Prop()
  websiteUrl: string;

  @Prop()
  twitterUrl: string;

  @Prop()
  instagramUrl: string;

  @Prop()
  otherURL: string;

  @Prop()
  artistName: string;

  @Prop()
  artwork: [];

  @Prop()
  acknowledgement: boolean;

  @Prop()
  acknowledgement2: boolean;

  @Prop()
  acknowledgement3: boolean;

  @Prop()
  prompts: [];
}

export const RegistrySchema = SchemaFactory.createForClass(Registry);
