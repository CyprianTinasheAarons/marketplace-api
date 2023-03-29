import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Res,
  Delete,
  HttpStatus,
} from '@nestjs/common';
import { RegistryService } from './registry.service';
import { CreateRegistryDto } from './dto/create-registry.dto';
import { UpdateRegistryDto } from './dto/update-registry.dto';
import {
  ApiBody,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@ApiTags('Registry')
@Controller('registry')
export class RegistryController {
  constructor(private readonly registryService: RegistryService) {}

  @Post()
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        firstName: {
          type: 'string',
          example: 'John',
        },
        lastName: {
          type: 'string',
          example: 'Doe',
        },
        walletAddress: {
          type: 'string',
          example: '0xc0ffee254729296a45a3885639AC7E10F9d54979',
        },
        websiteUrl: {
          type: 'string',
          example: 'https://example.com',
        },
        twitterUrl: {
          type: 'string',
          example: 'https://twitter.com/johndoe',
        },
        instagramUrl: {
          type: 'string',
          example: 'https://instagram.com/johndoe',
        },
        otherURL: {
          type: 'string',
          example: 'https://linkedin.com/in/johndoe',
        },
        artistName: {
          type: 'string',
          example: 'John Doe',
        },
        artwork: {
          type: 'array',
          items: {
            type: 'string',
            example: 'Artwork1',
          },
        },
        acknowledgement: {
          type: 'boolean',
          example: true,
        },
        acknowledgement2: {
          type: 'boolean',
          example: true,
        },
        acknowledgement3: {
          type: 'boolean',
          example: false,
        },
        prompts: {
          type: 'array',
          items: {
            type: 'string',
            example: 'Prompt1',
          },
        },
      },
    },
  })
  @ApiOkResponse({
    description: 'Registry created successfully',
  })
  @ApiUnauthorizedResponse({
    description: 'Error creating registry',
  })
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
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        firstName: {
          type: 'string',
          example: 'John',
        },
        lastName: {
          type: 'string',
          example: 'Doe',
        },
        walletAddress: {
          type: 'string',
          example: '0xc0ffee254729296a45a3885639AC7E10F9d54979',
        },
        websiteUrl: {
          type: 'string',
          example: 'https://example.com',
        },
        twitterUrl: {
          type: 'string',
          example: 'https://twitter.com/johndoe',
        },
        instagramUrl: {
          type: 'string',
          example: 'https://instagram.com/johndoe',
        },
        otherURL: {
          type: 'string',
          example: 'https://linkedin.com/in/johndoe',
        },
        artistName: {
          type: 'string',
          example: 'John Doe',
        },
        artwork: {
          type: 'array',
          items: {
            type: 'string',
            example: 'Artwork1',
          },
        },
        acknowledgement: {
          type: 'boolean',
          example: true,
        },
        acknowledgement2: {
          type: 'boolean',
          example: true,
        },
        acknowledgement3: {
          type: 'boolean',
          example: false,
        },
        prompts: {
          type: 'array',
          items: {
            type: 'string',
            example: 'Prompt1',
          },
        },
      },
    },
  })
  @ApiOkResponse({
    description: 'Registry updated successfully',
  })
  @ApiUnauthorizedResponse({
    description: 'Error updating registry',
  })
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
