import { Alchemy } from './../../alchemy/entities/alchemy.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Collection } from '../../collections/entities/collection.entity';
import { Purchase } from '../../purchases/entities/purchase.entity';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  username: string;

  @Prop()
  walletAddress: string;

  @Prop()
  bio: string;

  @Prop()
  avatar: string;

  @Prop()
  banner: string;

  @Prop()
  websiteUrl: string;

  @Prop()
  facebookUrl: string;

  @Prop()
  twitterUrl: string;

  @Prop()
  instagramUrl: string;

  @Prop()
  tiktokUrl: string;

  @Prop()
  youtubeUrl: string;

  @Prop()
  twitchUrl: string;

  @Prop()
  linkedinUrl: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  role: string;

  @Prop()
  isVerified: boolean;

  @Prop()
  isBanned: boolean;

  @Prop()
  isSuspended: boolean;

  @Prop()
  collections: Collection[];

  @Prop()
  alchemy: Alchemy[];

  @Prop()
  purchases: Purchase[];

  @Prop()
  followers: User[];

  @Prop()
  following: User[];

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop()
  deletedAt: Date;

  @Prop()
  lastLogin: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
