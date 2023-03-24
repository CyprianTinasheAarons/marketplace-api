import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBlockchainDto } from './dto/create-blockchain.dto';
import { UpdateBlockchainDto } from './dto/update-blockchain.dto';
import { Blockchain, BlockchainDocument } from './schema/blockchains.schema';

@Injectable()
export class BlockchainsService {
  constructor(
    @InjectModel(Blockchain.name)
    private readonly blockchainModel: Model<BlockchainDocument>,
  ) {}

  async create(
    createBlockchainDto: CreateBlockchainDto,
  ): Promise<BlockchainDocument> {
    const Blockchain = new this.blockchainModel(createBlockchainDto);
    return Blockchain.save();
  }

  async findAll(): Promise<BlockchainDocument[]> {
    const categories = await this.blockchainModel.find().exec();
    return categories;
  }

  async findOne(id: string) {
    const Blockchain = await this.blockchainModel.findById(id);
    return Blockchain;
  }

  async update(
    id: string,
    updateBlockchainDto: UpdateBlockchainDto,
  ): Promise<BlockchainDocument> {
    return this.blockchainModel.findByIdAndUpdate(id, updateBlockchainDto);
  }

  async remove(id: string) {
    return this.blockchainModel.findByIdAndRemove(id);
  }
}
