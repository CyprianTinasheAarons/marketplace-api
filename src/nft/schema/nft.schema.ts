import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type NftDocument = Nft & Document;

@Schema()
export class Nft {
  @ApiProperty({ example: 'Cool NFT' })
  @Prop()
  name: string;

  @ApiProperty({ example: 'An amazing NFT!' })
  @Prop()
  description: string;

  @ApiProperty({ example: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e' })
  @Prop()
  primary_sale_recipient: string;

  @ApiProperty({ example: 'Digital Art' })
  @Prop()
  category: string;

  @ApiProperty({ example: 'https://example.com/avatar.jpg' })
  @Prop()
  avatar: string;

  @ApiProperty({ example: 'https://example.com/banner.jpg' })
  @Prop()
  banner: string;

  @ApiProperty({ example: 'https://example.com/featured.jpg' })
  @Prop()
  featured: string;

  @ApiProperty({ example: 100 })
  @Prop()
  supply: number;

  @ApiProperty({ example: false })
  @Prop()
  explicit: boolean;

  @ApiProperty({ example: true })
  @Prop()
  isVerified: boolean;

  @ApiProperty({ example: false })
  @Prop()
  isBanned: boolean;

  @ApiProperty({ example: false })
  @Prop()
  isSuspended: boolean;

  @ApiProperty({ example: 'https://example.com/nft' })
  @Prop()
  url: string;

  @ApiProperty({ example: 'https://example.com/qrcode.png' })
  @Prop()
  qrcode: string;

  @ApiProperty({ example: 'Ethereum' })
  @Prop()
  blockchain: string;

  @ApiProperty({ example: '0xc0ffee254729296a45a3885639AC7E10F9d54979' })
  @Prop()
  contractAddress: string;
}

export const NftSchema = SchemaFactory.createForClass(Nft);
