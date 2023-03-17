import { User } from '../entities/user.entity';
import { Collection } from '../../collections/entities/collection.entity';
import { Nft } from 'src/nfts/entities/nft.entity';
import { Purchase } from '../../purchases/entities/purchase.entity';
import { Sale } from '../../sales/entities/sale.entity';
import { Alchemy } from './../../alchemy/entities/alchemy.entity';
export class CreateUserDto extends User {
  firstName: string;

  lastName: string;

  username: string;

  walletAddress: string;

  bio: string;

  avatar: string;

  banner: string;

  websiteUrl: string;

  facebookUrl: string;

  twitterUrl: string;

  instagramUrl: string;

  tiktokUrl: string;

  youtubeUrl: string;

  twitchUrl: string;

  linkedinUrl: string;

  email: string;

  password: string;

  role: string;

  isVerified: boolean;

  isBanned: boolean;

  isSuspended: boolean;

  collections: Collection[];

  likes: Nft[];

  alchemy: Alchemy[];

  purchases: Purchase[];

  sales: Sale[];

  followers: User[];

  following: User[];

  createdAt: Date;

  updatedAt: Date;

  deletedAt: Date;

  lastLogin: Date;
}
