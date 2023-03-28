export class CreateNftDto {
  ownerAddress: string;
  name: string;
  primary_sale_recipient: string;
  description: string;
  category: string;
  avatar: string;
  banner: string;
  featured: string;
  supply: number;
  explicit: boolean;
  isVerified: boolean;
  isBanned: boolean;
  isSuspended: boolean;
  url: string;
  qrcode: string;
  blockchain: string;
  contractAddress: string;
}
