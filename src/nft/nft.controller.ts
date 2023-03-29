import {
  Controller,
  Get,
  Post,
  Body,
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

import {
  ApiBody,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

// @ApiProperty({ example: 'Cool NFT' })
// @Prop()
// name: string;

// @ApiProperty({ example: 'An amazing NFT!' })
// @Prop()
// description: string;

// @ApiProperty({ example: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e' })
// @Prop()
// primary_sale_recipient: string;

// @ApiProperty({ example: 'Digital Art' })
// @Prop()
// category: string;

// @ApiProperty({ example: 'https://example.com/avatar.jpg' })
// @Prop()
// avatar: string;

// @ApiProperty({ example: 'https://example.com/banner.jpg' })
// @Prop()
// banner: string;

// @ApiProperty({ example: 'https://example.com/featured.jpg' })
// @Prop()
// featured: string;

// @ApiProperty({ example: 100 })
// @Prop()
// supply: number;

// @ApiProperty({ example: false })
// @Prop()
// explicit: boolean;

// @ApiProperty({ example: true })
// @Prop()
// isVerified: boolean;

// @ApiProperty({ example: false })
// @Prop()
// isBanned: boolean;

// @ApiProperty({ example: false })
// @Prop()
// isSuspended: boolean;

// @ApiProperty({ example: 'https://example.com/nft' })
// @Prop()
// url: string;

// @ApiProperty({ example: 'https://example.com/qrcode.png' })
// @Prop()
// qrcode: string;

// @ApiProperty({ example: 'Ethereum' })
// @Prop()
// blockchain: string;

// @ApiProperty({ example: '0xc0ffee254729296a45a3885639AC7E10F9d54979' })
// @Prop()
// contractAddress: string;
@ApiTags('NFT')
@Controller('nft')
export class NftController {
  constructor(private readonly nftService: NftService) {}

  @Post('createNFTDrop')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        signer: {
          type: 'string',
        },
        blockchain: {
          type: 'string',
        },
        createNftDto: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
            },
            description: {
              type: 'string',
            },
            primary_sale_recipient: {
              type: 'string',
            },
            category: {
              type: 'string',
            },
            avatar: {
              type: 'string',
            },
            banner: {
              type: 'string',
            },
            featured: {
              type: 'string',
            },
            supply: {
              type: 'number',
            },
            explicit: {
              type: 'boolean',
            },
            isVerified: {
              type: 'boolean',
            },
            isBanned: {
              type: 'boolean',
            },
            isSuspended: {
              type: 'boolean',
            },
            url: {
              type: 'string',
            },
            qrcode: {
              type: 'string',
            },
            blockchain: {
              type: 'string',
            },
            contractAddress: {
              type: 'string',
            },
          },
        },
      },
    },
  })
  @ApiOkResponse({ description: 'NFT Drop Created' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
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
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        signer: {
          type: 'string',
        },
        blockchain: {
          type: 'string',
        },
        createNftDto: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
            },
            description: {
              type: 'string',
            },
            primary_sale_recipient: {
              type: 'string',
            },
            category: {
              type: 'string',
            },
            avatar: {
              type: 'string',
            },
            banner: {
              type: 'string',
            },
            featured: {
              type: 'string',
            },
            supply: {
              type: 'number',
            },
            explicit: {
              type: 'boolean',
            },
            isVerified: {
              type: 'boolean',
            },
            isBanned: {
              type: 'boolean',
            },
            isSuspended: {
              type: 'boolean',
            },
            url: {
              type: 'string',
            },
            qrcode: {
              type: 'string',
            },
            blockchain: {
              type: 'string',
            },
            contractAddress: {
              type: 'string',
            },
          },
        },
      },
    },
  })
  @ApiOkResponse({ description: 'NFT Drop Created' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
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

  @Get('all')
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
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        updateNftDto: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
            },
            description: {
              type: 'string',
            },
            primary_sale_recipient: {
              type: 'string',
            },
            category: {
              type: 'string',
            },
            avatar: {
              type: 'string',
            },
            banner: {
              type: 'string',
            },
            featured: {
              type: 'string',
            },
            supply: {
              type: 'number',
            },
            explicit: {
              type: 'boolean',
            },
            isVerified: {
              type: 'boolean',
            },
            isBanned: {
              type: 'boolean',
            },
            isSuspended: {
              type: 'boolean',
            },
            url: {
              type: 'string',
            },
            qrcode: {
              type: 'string',
            },
            blockchain: {
              type: 'string',
            },
            contractAddress: {
              type: 'string',
            },
          },
        },
      },
    },
  })
  @ApiOkResponse({ description: 'NFT Drop Updated' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  async update(@Param('id') id: string, @Body() updateNftDto: UpdateNftDto) {
    return this.nftService.update(id, updateNftDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.nftService.remove(id);
  }
}
