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
import {
  ApiBody,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
        description: {
          type: 'string',
        },
        image: {
          type: 'string',
        },
      },
    },
  })
  @ApiOkResponse({ description: 'Category created' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
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
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
        description: {
          type: 'string',
        },
        image: {
          type: 'string',
        },
      },
    },
  })
  @ApiOkResponse({ description: 'Category updated' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
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
