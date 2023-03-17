import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  Res,
  Req,
  Put,
} from '@nestjs/common';
import { NftService } from './nft.service';
import { CreateNftDto } from './dto/create-nft.dto';
import { UpdateNftDto } from './dto/update-nft.dto';

@Controller('nft')
export class NftController {
  constructor(private readonly nftService: NftService) {}

  @Post('createNFTDrop')
  async createNFTDrop(
    @Req() req,
    @Res() res,
    @Body() createNftDto: CreateNftDto,
  ) {
    const signer = req.body.signer;
    const blockchain = req.body.blockchain;
    const data = await this.nftService.createNFTDrop(
      signer,
      blockchain,
      createNftDto,
    );
    return res.status(HttpStatus.OK).json(data);
  }

  @Post('createNFTCollection')
  async createNFTCollection(
    @Req() req,
    @Res() res,
    @Body() createNftDto: CreateNftDto,
  ) {
    const signer = req.body.signer;
    const blockchain = req.body.blockchain;
    const data = await this.nftService.createNFTCollection(
      signer,
      blockchain,
      createNftDto,
    );
    return res.status(HttpStatus.OK).json(data);
  }

  @Get()
  async findAll(@Res() res) {
    const data = await this.nftService.findAll();
    return res.status(HttpStatus.OK).json(data);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res) {
    const data = await this.nftService.findOne(id);
    return res.status(HttpStatus.OK).json(data);
  }

  @Get('contractAddress/:contractAddress')
  async findOneByContractAddress(
    @Param('contractAddress') contractAddress: string,
    @Res() res,
  ) {
    const data = await this.nftService.findOneByContractAddress(
      contractAddress,
    );
    return res.status(HttpStatus.OK).json(data);
  }

  @Get('walletAddress/:walletAddress')
  async findAllByWalletAddress(
    @Param('walletAddress') walletAddress: string,
    @Res() res,
  ) {
    const data = await this.nftService.findAllByWalletAddress(walletAddress);
    return res.status(HttpStatus.OK).json(data);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateNftDto: UpdateNftDto) {
    return this.nftService.update(id, updateNftDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.nftService.remove(id);
  }
}
