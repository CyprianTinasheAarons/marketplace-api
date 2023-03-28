import { Module } from '@nestjs/common';
import { StableDiffusionService } from './stable-diffusion.service';
import { StableDiffusionController } from './stable-diffusion.controller';

@Module({
  controllers: [StableDiffusionController],
  providers: [StableDiffusionService]
})
export class StableDiffusionModule {}
