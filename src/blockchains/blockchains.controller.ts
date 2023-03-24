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

@Controller('blockchains')
export class BlockchainsController {
  constructor(private readonly blockchainsService: BlockchainsService) {}

  @Post()
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
