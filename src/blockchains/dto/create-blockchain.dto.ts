export class CreateBlockchainDto {
  name: string;
  network: string;
  rpcUrl: string;
  nativeToken: string;
  explorerUrl: string;
  marketplaceAddress: string;
  createdAt: Date;
  updatedAt: Date;
}
