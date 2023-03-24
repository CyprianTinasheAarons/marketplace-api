import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { CloudinaryService } from './cloudinary.service';

@Controller('cloudinary')
export class CloudinaryController {
  constructor(private readonly cloudinaryService: CloudinaryService) {}

  @Post('upload')
  async uploadImage(@Res() response, @Body() file: Express.Multer.File) {
    const result = await this.cloudinaryService.uploadImage(file);
    return response.status(HttpStatus.OK).json({
      message: 'Image uploaded successfully',
      result,
    });
  }

  @Delete('delete/:publicId')
  async deleteImage(@Res() response, @Param('publicId') publicId: string) {
    const result = await this.cloudinaryService.deleteImage(publicId);
    return response.status(HttpStatus.OK).json({
      message: 'Image deleted successfully',
      result,
    });
  }

  @Patch('update/:publicId')
  async updateImage(
    @Res() response,
    @Param('publicId') publicId: string,
    @Body() file: Express.Multer.File,
  ) {
    const result = await this.cloudinaryService.updateImage(publicId, file);
    return response.status(HttpStatus.OK).json({
      message: 'Image updated successfully',
      result,
    });
  }

  @Get('images')
  async getImages(@Res() response) {
    const result = await this.cloudinaryService.getImages();
    return response.status(HttpStatus.OK).json({
      message: 'Images fetched successfully',
      result,
    });
  }

  @Get('image/:publicId')
  async getImage(@Res() response, @Param('publicId') publicId: string) {
    const result = await this.cloudinaryService.getImage(publicId);
    return response.status(HttpStatus.OK).json({
      message: 'Image fetched successfully',
      result,
    });
  }
}
