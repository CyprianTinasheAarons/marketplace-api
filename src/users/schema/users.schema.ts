import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type UserDocument = User & Document;

@Schema()
export class User {
  @ApiProperty({
    description: 'First name of the user',
    example: 'John',
  })
  @Prop()
  firstName: string;

  @ApiProperty({
    description: 'Last name of the user',
    example: 'Doe',
  })
  @Prop()
  lastName: string;

  @ApiProperty({
    description: 'Username of the user',
    example: 'johndoe',
  })
  @Prop()
  username: string;

  @ApiProperty({
    description: 'Wallet address of the user',
    example: '0xAbC123',
  })
  @Prop()
  walletAddress: string;

  @ApiProperty({
    description: 'Bio of the user',
    example: 'I am a software engineer',
  })
  @Prop()
  bio: string;

  @ApiProperty({
    description: 'Avatar URL of the user',
    example: 'https://example.com/avatar.jpg',
  })
  @Prop()
  avatar: string;

  @ApiProperty({
    description: 'Banner URL of the user',
    example: 'https://example.com/banner.jpg',
  })
  @Prop()
  banner: string;

  @ApiProperty({
    description: 'URL of the user website',
    example: 'https://example.com',
  })
  @Prop()
  websiteUrl: string;

  @ApiProperty({
    description: 'URL of the user Facebook profile',
    example: 'https://facebook.com/user',
  })
  @Prop()
  facebookUrl: string;

  @ApiProperty({
    description: 'URL of the user Twitter profile',
    example: 'https://twitter.com/user',
  })
  @Prop()
  twitterUrl: string;

  @ApiProperty({
    description: 'URL of the user Instagram profile',
    example: 'https://instagram.com/user',
  })
  @Prop()
  instagramUrl: string;

  @ApiProperty({
    description: 'URL of the user TikTok profile',
    example: 'https://tiktok.com/user',
  })
  @Prop()
  tiktokUrl: string;

  @ApiProperty({
    description: 'URL of the user YouTube profile',
    example: 'https://youtube.com/user',
  })
  @Prop()
  youtubeUrl: string;

  @ApiProperty({
    description: 'URL of the user Twitch profile',
    example: 'https://twitch.tv/user',
  })
  @Prop()
  twitchUrl: string;

  @ApiProperty({
    description: 'URL of the user LinkedIn profile',
    example: 'https://linkedin.com/user',
  })
  @Prop()
  linkedinUrl: string;

  @ApiProperty({
    description: 'Email address of the user',
    example: 'johndoe@example.com',
  })
  @Prop()
  email: string;

  @ApiProperty({
    description: 'Hashed password of the user',
  })
  @Prop()
  password: string;

  @ApiProperty({
    description: 'Role of the user',
    example: 'user',
  })
  @Prop()
  role: string;

  @ApiProperty({
    description: 'Whether the user is verified or not',
    example: true,
  })
  @Prop()
  isVerified: boolean;

  @ApiProperty({
    description: 'Whether the user is banned or not',
    example: false,
  })
  @Prop()
  isBanned: boolean;

  @ApiProperty({
    description: 'Whether the user is suspended or not',
    example: false,
  })
  @Prop()
  isSuspended: boolean;

  @ApiProperty({
    description: 'Array of followers of the user',
    type: () => [User],
  })
  @Prop()
  followers: User[];

  @ApiProperty({
    description: 'Array of NFTs that the user liked',
  })
  @Prop()
  likedNfts: [];

  @ApiProperty({
    description: 'Date when the user was created',
  })
  @Prop()
  createdAt: Date;

  @ApiProperty({
    description: 'Date when the user was last updated',
  })
  @Prop()
  updatedAt: Date;

  @ApiProperty({
    description: 'Date when the user was deleted',
  })
  @Prop()
  deletedAt: Date;

  @ApiProperty({
    description: 'Date when the user last logged in',
  })
  @Prop()
  lastLogin: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
