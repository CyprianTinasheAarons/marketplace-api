import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlchemyService } from './alchemy.service';
import { CreateAlchemyDto } from './dto/create-alchemy.dto';
import { UpdateAlchemyDto } from './dto/update-alchemy.dto';

@Controller('alchemy')
export class AlchemyController {
  constructor(private readonly alchemyService: AlchemyService) {}

  @Post()
  create(@Body() createAlchemyDto: CreateAlchemyDto) {
    return this.alchemyService.create(createAlchemyDto);
  }

  @Get()
  findAll() {
    return this.alchemyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alchemyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlchemyDto: UpdateAlchemyDto) {
    return this.alchemyService.update(+id, updateAlchemyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alchemyService.remove(+id);
  }
}
