import { Controller } from '@nestjs/common';
import { StableDiffusionService } from './stable-diffusion.service';

@Controller('stable-diffusion')
export class StableDiffusionController {
  constructor(private readonly stableDiffusionService: StableDiffusionService) {}
}
