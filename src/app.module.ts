import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { CollectionsModule } from './collections/collections.module';
import { ListingsModule } from './listings/listings.module';
import { PurchasesModule } from './purchases/purchases.module';
import { SalesModule } from './sales/sales.module';
import { NftsModule } from './nfts/nfts.module';
import { SearchModule } from './search/search.module';
import { DiscoveryModule } from './discovery/discovery.module';
import { BidsModule } from './bids/bids.module';
import { OffersModule } from './offers/offers.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { AlchemyModule } from './alchemy/alchemy.module';
import { StorageModule } from './storage/storage.module';
import { AuthModule } from './auth/auth.module';

const dbConfig = {
  uri: 'mongodb+srv://dbAdmin:WgdwEX8beVvC8MgP@cluster0.h930z.mongodb.net/?retryWrites=true&w=majority',
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'cent-marketplace-db',
  },
};

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(dbConfig.uri, dbConfig.options),
    ConfigModule.forRoot(),
    CollectionsModule,
    ListingsModule,
    PurchasesModule,
    SalesModule,
    NftsModule,
    SearchModule,
    DiscoveryModule,
    BidsModule,
    OffersModule,
    CloudinaryModule,
    AlchemyModule,
    StorageModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
