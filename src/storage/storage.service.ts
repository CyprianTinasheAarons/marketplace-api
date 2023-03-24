import { Injectable } from '@nestjs/common';
import { ThirdwebStorage } from '@thirdweb-dev/storage';
import { NFTStorage, File } from 'nft.storage';
import mime from 'mime';

// First, instantiate the SDK
const storage = new ThirdwebStorage();
const nftstorage = new NFTStorage({ token: process.env.NFTSTORAGE_API_KEY });
@Injectable()
export class StorageService {
  //IPFS
  async ipfsUpload(metadata: any) {
    return await storage.upload(metadata);
  }

  async ipfsDownload(uri: string) {
    return await storage.downloadJSON(uri);
  }

  // Here we a URL with a gateway that we can look at in the browser
  async ipfsResolve(uri: string) {
    return await storage.resolveScheme(uri);
  }

  //NFT Storage
  async nftUpload(metadata: any) {
    const cid = await nftstorage.storeDirectory([
      new File([JSON.stringify(metadata)], 'metadata.json', {
        type: 'application/json',
      }),
    ]);
    return cid;
  }

  //Store image,name, description
  async nftUploadItem(image: any, name: string, description: string) {
    const cid = await nftstorage.store({
      image,
      name,
      description,
    });
    return cid;
  }
}
