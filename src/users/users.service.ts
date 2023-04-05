import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schema/users.schema';
@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserDocument> {
    const user = new this.userModel(createUserDto);
    return user.save();
  }

  async findAll(): Promise<UserDocument[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string) {
    return this.userModel.findById(id);
  }

  async findOneByEmail(email: string) {
    return this.userModel.findOne({ email: email });
  }

  async findOneByWalletAddress(walletAddress: string) {
    return this.userModel.findOne({ walletAddress });
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UserDocument> {
    return this.userModel.findByIdAndUpdate(id, updateUserDto);
  }

  async remove(id: string) {
    return this.userModel.findByIdAndRemove(id);
  }

  //implementing logic for followers , following and likes other users / nfts
  async followUser(userId: string, followerId: string): Promise<UserDocument> {
    const result = this.userModel.findByIdAndUpdate(
      userId,
      { $addToSet: { following: followerId } },
      { new: true },
    );
    return result;
  }

  async unfollowUser(
    userId: string,
    followerId: string,
  ): Promise<UserDocument> {
    const result = this.userModel.findByIdAndUpdate(
      userId,
      { $pull: { following: followerId } },
      { new: true },
    );
    return result;
  }

  async likeNft(
    userId: string,
    contractAddress: string,
    nftId: string,
  ): Promise<UserDocument> {
    const result = this.userModel.findByIdAndUpdate(
      userId,
      {
        $addToSet: {
          likedNfts: {
            contractAddress,
            nftId,
          },
        },
      },
      { new: true },
    );

    return result;
  }
}
