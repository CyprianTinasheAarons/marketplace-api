import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Res,
  HttpStatus,
  Param,
  Delete,
} from '@nestjs/common';
import { BlockchainsService } from './blockchains.service';
import { CreateBlockchainDto } from './dto/create-blockchain.dto';
import { UpdateBlockchainDto } from './dto/update-blockchain.dto';
import {
  ApiBody,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
@ApiTags('Blockchains')
@Controller('blockchains')
export class BlockchainsController {
  constructor(private readonly blockchainsService: BlockchainsService) {}

  @Post()
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          example: 'Ethereum',
        },
        network: {
          type: 'string',
          example: 'Mainnet',
        },
        rpcUrl: {
          type: 'string',
          example: 'https://mainnet.infura.io/v3/YOUR-PROJECT-ID',
        },
        nativeToken: {
          type: 'string',
          example: 'ETH',
        },
        explorerUrl: {
          type: 'string',
          example: 'https://etherscan.io',
        },
        marketplaceAddress: {
          type: 'string',
          example: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
        },
      },
    },
  })
  @ApiOkResponse({
    description: 'The record has been successfully created.',
  })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  async create(@Body() createBlockchainDto: CreateBlockchainDto, @Res() res) {
    const blockchain = await this.blockchainsService.create(
      createBlockchainDto,
    );
    return res.status(HttpStatus.CREATED).json(blockchain);
  }

  @Get()
  async findAll(@Res() res) {
    const blockchains = await this.blockchainsService.findAll();
    return res.status(HttpStatus.OK).json(blockchains);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res) {
    const blockchain = await this.blockchainsService.findOne(id);
    return res.status(HttpStatus.OK).json(blockchain);
  }

  @Put(':id')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          example: 'Ethereum',
        },
        network: {
          type: 'string',
          example: 'Mainnet',
        },
        rpcUrl: {
          type: 'string',
          example: 'https://mainnet.infura.io/v3/YOUR-PROJECT-ID',
        },
        nativeToken: {
          type: 'string',
          example: 'ETH',
        },
        explorerUrl: {
          type: 'string',
          example: 'https://etherscan.io',
        },
        marketplaceAddress: {
          type: 'string',
          example: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
        },
      },
    },
  })
  @ApiOkResponse({
    description: 'The record has been successfully updated.',
  })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  async update(
    @Param('id') id: string,
    @Body() updateBlockchainDto: UpdateBlockchainDto,
    @Res() res,
  ) {
    const blockchain = await this.blockchainsService.update(
      id,
      updateBlockchainDto,
    );
    return res.status(HttpStatus.OK).json(blockchain);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res) {
    await this.blockchainsService.remove(id);
    return res.status(HttpStatus.OK).json({ message: 'Category deleted' });
  }
}
