import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type BlockchainDocument = Blockchain & Document;

@Schema()
export class Blockchain {
  @ApiProperty({ example: 'Ethereum' })
  @Prop()
  name: string;

  @ApiProperty({ example: 'Mainnet' })
  @Prop()
  network: string;

  @ApiProperty({ example: 'https://mainnet.infura.io/v3/YOUR-PROJECT-ID' })
  @Prop()
  rpcUrl: string;

  @ApiProperty({ example: 'ETH' })
  @Prop()
  nativeToken: string;

  @ApiProperty({ example: 'https://etherscan.io' })
  @Prop()
  explorerUrl: string;

  @ApiProperty({ example: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e' })
  @Prop()
  marketplaceAddress: string;

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

export const BlockchainSchema = SchemaFactory.createForClass(Blockchain);
