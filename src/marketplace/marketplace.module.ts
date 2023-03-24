import { Module } from '@nestjs/common';
import { MarketplaceService } from './marketplace.service';
import { MarketplaceController } from './marketplace.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Marketplace, MarketplaceSchema } from './schema/marketplace.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Marketplace.name, schema: MarketplaceSchema },
    ]),
  ],
  controllers: [MarketplaceController],
  providers: [MarketplaceService],
})
export class MarketplaceModule {}
