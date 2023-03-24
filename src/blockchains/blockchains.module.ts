import { Module } from '@nestjs/common';
import { BlockchainsService } from './blockchains.service';
import { BlockchainsController } from './blockchains.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Blockchain, BlockchainSchema } from './schema/blockchains.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Blockchain.name, schema: BlockchainSchema },
    ]),
  ],
  controllers: [BlockchainsController],
  providers: [BlockchainsService],
})
export class BlockchainsModule {}
