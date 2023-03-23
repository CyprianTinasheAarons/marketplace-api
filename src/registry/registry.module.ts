import { Module } from '@nestjs/common';
import { RegistryService } from './registry.service';
import { RegistryController } from './registry.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Registry, RegistrySchema } from './schema/registry.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Registry.name, schema: RegistrySchema },
    ]),
  ],
  controllers: [RegistryController],
  providers: [RegistryService],
})
export class RegistryModule {}
