export class CreateMarketplaceDto {
  tokenId: string;
  tokenName: string;
  tokenSymbol: string;
  tokenOwner: string;
  tokenDescription: string;
  tokenImage: string;
  tokenContractAddress: string;
  tokenPrice: number;
  tokenQuantity: number;
  sellerAddress: string;
  buyerAddress: string;
  createdAt: Date;
  updatedAt: Date;
  status: string;
}
