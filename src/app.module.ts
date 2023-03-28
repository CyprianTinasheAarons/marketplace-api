import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AlchemyModule } from './alchemy/alchemy.module';
import { StorageModule } from './storage/storage.module';
import { AuthModule } from './auth/auth.module';
import { NftModule } from './nft/nft.module';
import { CategoriesModule } from './categories/categories.module';
import { RegistryModule } from './registry/registry.module';
import { MarketplaceModule } from './marketplace/marketplace.module';
import { NotificationsModule } from './notifications/notifications.module';
import { BlockchainsModule } from './blockchains/blockchains.module';
import { StableDiffusionModule } from './stable-diffusion/stable-diffusion.module';

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
    AlchemyModule,
    StorageModule,
    NftModule,
    AuthModule,
    CategoriesModule,
    RegistryModule,
    MarketplaceModule,
    NotificationsModule,
    BlockchainsModule,
    StableDiffusionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
