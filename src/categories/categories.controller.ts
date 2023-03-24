import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Res,
  HttpStatus,
  Param,
  Delete,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto, @Res() res) {
    const category = await this.categoriesService.create(createCategoryDto);
    return res.status(HttpStatus.CREATED).json(category);
  }

  @Get()
  async findAll(@Res() res) {
    const categories = await this.categoriesService.findAll();
    return res.status(HttpStatus.OK).json(categories);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res) {
    const category = await this.categoriesService.findOne(id);
    return res.status(HttpStatus.OK).json(category);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
    @Res() res,
  ) {
    const category = await this.categoriesService.update(id, updateCategoryDto);
    return res.status(HttpStatus.OK).json(category);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res) {
    await this.categoriesService.remove(id);
    return res.status(HttpStatus.OK).json({ message: 'Category deleted' });
  }
}
