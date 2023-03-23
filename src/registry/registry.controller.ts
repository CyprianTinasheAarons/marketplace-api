import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { RegistryService } from './registry.service';
import { CreateRegistryDto } from './dto/create-registry.dto';
import { UpdateRegistryDto } from './dto/update-registry.dto';

@Controller('registry')
export class RegistryController {
  constructor(private readonly registryService: RegistryService) {}

  @Post()
  async create(@Res() response, @Body() createRegistryDto: CreateRegistryDto) {
    try {
      const newRegistry = await this.registryService.create(createRegistryDto);
      return response.status(HttpStatus.CREATED).json({
        message: 'Registry created successfully',
        registry: newRegistry,
      });
    } catch (e) {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Error creating registry',
      });
    }
  }

  @Get()
  async findAll(@Res() response) {
    try {
      const registries = await this.registryService.findAll();
      return response.status(HttpStatus.OK).json(registries);
    } catch (e) {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Error getting registries',
      });
    }
  }

  @Get(':id')
  async findOne(@Res() response, @Param('id') id: string) {
    try {
      const registry = await this.registryService.findOne(id);
      if (!registry) {
        return response.status(HttpStatus.NOT_FOUND).json({
          message: 'Registry not found',
        });
      }
      return response.status(HttpStatus.OK).json(registry);
    } catch (e) {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Error getting registry',
      });
    }
  }

  @Put(':id')
  async update(
    @Res() response,
    @Param('id') id: string,
    @Body() updateRegistryDto: UpdateRegistryDto,
  ) {
    try {
      const updatedRegistry = await this.registryService.update(
        id,
        updateRegistryDto,
      );
      if (!updatedRegistry) {
        return response.status(HttpStatus.NOT_FOUND).json({
          message: 'Registry not found',
        });
      }
      return response.status(HttpStatus.OK).json({
        message: 'Registry updated successfully',
        registry: updatedRegistry,
      });
    } catch (e) {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Error updating registry',
      });
    }
  }

  @Delete(':id')
  async remove(@Res() response, @Param('id') id: string) {
    try {
      const deletedRegistry = await this.registryService.remove(id);
      if (!deletedRegistry) {
        return response.status(HttpStatus.NOT_FOUND).json({
          message: 'Registry not found',
        });
      }
      return response.status(HttpStatus.OK).json({
        message: 'Registry deleted successfully',
        registry: deletedRegistry,
      });
    } catch (e) {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Error deleting registry',
      });
    }
  }
}
