import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NftDocument = Nft & Document;

@Schema()
export class Nft {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  primary_sale_recipient: string;

  @Prop()
  category: string;

  @Prop()
  avatar: string;

  @Prop()
  banner: string;

  @Prop()
  featured: string;

  @Prop()
  supply: number;

  @Prop()
  explicit: boolean;

  @Prop()
  isVerified: boolean;

  @Prop()
  isBanned: boolean;

  @Prop()
  isSuspended: boolean;

  @Prop()
  url: string;

  @Prop()
  blockchain: string;

  @Prop()
  contractAddress: string;
}

export const NftSchema = SchemaFactory.createForClass(Nft);
