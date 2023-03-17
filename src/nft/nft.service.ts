import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Nft, NftDocument } from './schema/nft.schema';
import { CreateNftDto } from './dto/create-nft.dto';
import { UpdateNftDto } from './dto/update-nft.dto';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';

@Injectable()
export class NftService {
  constructor(
    @InjectModel(Nft.name)
    private readonly nftModel: Model<NftDocument>,
  ) {}

  async createNFTDrop(
    signer: any,
    blockchain: string,
    createNftDto: CreateNftDto,
  ): Promise<NftDocument> {
    const sdk = await ThirdwebSDK.fromSigner(signer, blockchain);
    const contractAddress = await sdk.deployer.deployNFTDrop({
      name: createNftDto.name,
      primary_sale_recipient: createNftDto.primary_sale_recipient,
    });
    createNftDto.contractAddress = contractAddress;
    const nft = await new this.nftModel(createNftDto);
    return nft.save();
  }

  async createNFTCollection(
    singer: any,
    blockchain: string,
    createNftDto: CreateNftDto,
  ): Promise<NftDocument> {
    const sdk = await ThirdwebSDK.fromSigner(singer, blockchain);
    const contractAddress = await sdk.deployer.deployNFTCollection({
      name: createNftDto.name,
      primary_sale_recipient: createNftDto.primary_sale_recipient,
    });
    createNftDto.contractAddress = contractAddress;
    const nft = await new this.nftModel(createNftDto);
    return nft.save();
  }

  async findAll(): Promise<NftDocument[]> {
    const nfts = await this.nftModel.find().exec();
    return nfts;
  }

  async findOne(id: string): Promise<NftDocument> {
    const nft = await this.nftModel.findById(id);
    return nft;
  }

  async findOneByContractAddress(
    contractAddress: string,
  ): Promise<NftDocument> {
    const data = await this.nftModel.findOne({ contractAddress });
    return data;
  }

  async findAllByWalletAddress(ownerAddress: string): Promise<NftDocument[]> {
    const nfts = await this.nftModel.find({ ownerAddress });
    return nfts;
  }

  async update(id: string, updateNftDto: UpdateNftDto): Promise<NftDocument> {
    const nft = await this.nftModel.findByIdAndUpdate(id, updateNftDto);
    return nft;
  }

  async remove(id: string): Promise<NftDocument> {
    const nft = await this.nftModel.findByIdAndRemove(id);
    return nft;
  }
}
