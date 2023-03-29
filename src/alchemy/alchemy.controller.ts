import { Controller, Get, Param, Res, HttpStatus } from '@nestjs/common';
import { AlchemyService } from './alchemy.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Alchemy')
@Controller('alchemy')
export class AlchemyController {
  constructor(private readonly alchemyService: AlchemyService) {}

  @Get('user/:address')
  async getUserNfts(@Res() response, @Param('address') address: string) {
    const userNfts = await this.alchemyService.getUserNfts(address);
    return response.status(HttpStatus.OK).json(userNfts);
  }

  @Get('collection/:contractAddress')
  async getCollectionNfts(
    @Res() response,
    @Param('contractAddress') contractAddress: string,
  ) {
    const collectionNfts = await this.alchemyService.getCollectionNfts(
      contractAddress,
    );
    return response.status(HttpStatus.OK).json(collectionNfts);
  }

  @Get('metadata/:contractAddress/:tokenId')
  async getNftMetadata(
    @Res() response,
    @Param('contractAddress') contractAddress: string,
    @Param('tokenId') tokenId: string,
  ) {
    const metadata = await this.alchemyService.getNftMetadata(
      contractAddress,
      tokenId,
    );
    return response.status(HttpStatus.OK).json(metadata);
  }

  @Get('holders/:contractAddress')
  async getNftHolders(
    @Res() response,
    @Param('contractAddress') contractAddress: string,
  ) {
    const holders = await this.alchemyService.getCurrentHolders(
      contractAddress,
    );
    return response.status(HttpStatus.OK).json(holders);
  }

  @Get('history/:contractAddress/:tokenId')
  async getNftHistory(
    @Res() response,
    @Param('contractAddress') contractAddress: string,
    @Param('tokenId') tokenId: number,
  ) {
    const history = await this.alchemyService.getNftHistory(
      contractAddress,
      tokenId,
    );
    return response.status(HttpStatus.OK).json(history);
  }

  @Get('transfers/:address')
  async getNftTransfers(@Res() response, @Param('address') address: string) {
    const transfers = await this.alchemyService.getTransactionHistory(address);
    return response.status(HttpStatus.OK).json(transfers);
  }
}
