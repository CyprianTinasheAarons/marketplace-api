import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { CollectionsModule } from './collections/collections.module';
import { ListingsModule } from './listings/listings.module';
import { PurchasesModule } from './purchases/purchases.module';
import { SearchModule } from './search/search.module';
import { DiscoveryModule } from './discovery/discovery.module';
import { BidsModule } from './bids/bids.module';
import { AlchemyModule } from './alchemy/alchemy.module';
import { StorageModule } from './storage/storage.module';
import { AuthModule } from './auth/auth.module';
import { NftModule } from './nft/nft.module';
import { CategoriesModule } from './categories/categories.module';

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
    SearchModule,
    DiscoveryModule,
    BidsModule,
    AlchemyModule,
    StorageModule,
    NftModule,
    AuthModule,
    CategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
