export class User {
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

  following: User[];

  likedNfts: [];

  createdAt: Date;

  updatedAt: Date;

  deletedAt: Date;

  lastLogin: Date;
}
