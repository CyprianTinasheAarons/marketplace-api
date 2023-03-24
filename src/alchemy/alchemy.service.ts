import { Injectable } from '@nestjs/common';
import { Alchemy, fromHex, AssetTransfersCategory } from 'alchemy-sdk';
import Settings from './alchemy.config';

const alchemy = new Alchemy(Settings);
@Injectable()
export class AlchemyService {
  //get nfts for user
  //get nfts for collection
  //get metadata for nft

  async getUserNfts(address: string): Promise<any> {
    const nfts = await alchemy.nft.getNftsForOwner(address);
    return nfts;
  }

  async getCollectionNfts(contractAddress: string): Promise<any> {
    const nfts = await alchemy.nft.getNftsForContract(contractAddress);
    return nfts;
  }

  async getNftMetadata(contractAddress: string, tokenId: string): Promise<any> {
    const metadata = await alchemy.nft.getNftMetadata(contractAddress, tokenId);
    return metadata;
  }

  async getCurrentHolders(contractAddress: string): Promise<any> {
    const owners = await alchemy.nft.getOwnersForContract(contractAddress);
    return owners;
  }

  //get history
  async getNftHistory(contractAddress: string, tokenId: number): Promise<any> {
    const response = await alchemy.core.getAssetTransfers({
      fromBlock: '0x0',
      contractAddresses: [contractAddress],
      category: [
        AssetTransfersCategory.EXTERNAL,
        AssetTransfersCategory.INTERNAL,
        AssetTransfersCategory.ERC20,
        AssetTransfersCategory.ERC721,
        AssetTransfersCategory.ERC1155,
      ],
      excludeZeroValue: false,
    });
    const history = response.transfers.filter((txn) => {
      fromHex(txn.erc721TokenId) == tokenId;
    });
    return history;
  }

  //get transaction history  for address
  async getTransactionHistory(address: string): Promise<any> {
    const response = await alchemy.core.getAssetTransfers({
      fromBlock: '0x0',
      fromAddress: address,
      category: [
        AssetTransfersCategory.EXTERNAL,
        AssetTransfersCategory.INTERNAL,
        AssetTransfersCategory.ERC20,
        AssetTransfersCategory.ERC721,
        AssetTransfersCategory.ERC1155,
      ],
      excludeZeroValue: false,
    });
    return response.transfers;
  }
}
