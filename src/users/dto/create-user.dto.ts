import { User } from '../entities/user.entity';
import { Nft } from '../../nft/entities/nft.entity';
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

  likes: Nft[];

  followers: User[];

  following: User[];

  createdAt: Date;

  updatedAt: Date;

  deletedAt: Date;

  lastLogin: Date;
}
