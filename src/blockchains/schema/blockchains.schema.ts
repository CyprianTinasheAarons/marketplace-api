import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BlockchainDocument = Blockchain & Document;

@Schema()
export class Blockchain {
  @Prop()
  name: string;

  @Prop()
  network: string;

  @Prop()
  rpcUrl: string;

  @Prop()
  nativeToken: string;

  @Prop()
  explorerUrl: string;

  @Prop()
  marketplaceAddress: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const BlockchainSchema = SchemaFactory.createForClass(Blockchain);
