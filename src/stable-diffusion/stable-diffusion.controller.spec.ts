import { Test, TestingModule } from '@nestjs/testing';
import { StableDiffusionController } from './stable-diffusion.controller';
import { StableDiffusionService } from './stable-diffusion.service';

describe('StableDiffusionController', () => {
  let controller: StableDiffusionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StableDiffusionController],
      providers: [StableDiffusionService],
    }).compile();

    controller = module.get<StableDiffusionController>(StableDiffusionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
