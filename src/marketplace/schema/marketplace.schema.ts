import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MarketplaceDocument = Marketplace & Document;

@Schema()
export class Marketplace {
  @Prop()
  tokenId: string;

  @Prop()
  tokenName: string;

  @Prop()
  tokenSymbol: string;

  @Prop()
  tokenOwner: string;

  @Prop()
  tokenDescription: string;

  @Prop()
  tokenImage: string;

  @Prop()
  tokenContractAddress: string;

  @Prop()
  tokenPrice: number;

  @Prop()
  tokenQuantity: number;

  @Prop()
  sellerAddress: string;

  @Prop()
  buyerAddress: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop()
  status: string;
}

export const MarketplaceSchema = SchemaFactory.createForClass(Marketplace);
