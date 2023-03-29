import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type MarketplaceDocument = Marketplace & Document;

@Schema()
export class Marketplace {
  @ApiProperty({ example: '1' })
  @Prop()
  tokenId: string;

  @ApiProperty({ example: 'AwesomeToken' })
  @Prop()
  tokenName: string;

  @ApiProperty({ example: 'AT' })
  @Prop()
  tokenSymbol: string;

  @ApiProperty({ example: '0xc0ffee254729296a45a3885639AC7E10F9d54979' })
  @Prop()
  tokenOwner: string;

  @ApiProperty({ example: 'A fantastic token!' })
  @Prop()
  tokenDescription: string;

  @ApiProperty({ example: 'https://example.com/token-image.jpg' })
  @Prop()
  tokenImage: string;

  @ApiProperty({ example: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e' })
  @Prop()
  tokenContractAddress: string;

  @ApiProperty({ example: 1000 })
  @Prop()
  tokenPrice: number;

  @ApiProperty({ example: 10 })
  @Prop()
  tokenQuantity: number;

  @ApiProperty({ example: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e' })
  @Prop()
  sellerAddress: string;

  @ApiProperty({ example: '0xc0ffee254729296a45a3885639AC7E10F9d54979' })
  @Prop()
  buyerAddress: string;

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

  @ApiProperty({ example: 'Pending' })
  @Prop()
  status: string;
}

export const MarketplaceSchema = SchemaFactory.createForClass(Marketplace);
