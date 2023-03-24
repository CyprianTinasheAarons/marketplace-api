import { Injectable } from '@nestjs/common';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';
import toStream = require('buffer-to-stream');
@Injectable()
export class CloudinaryService {
  async uploadImage(file: Express.Multer.File): Promise<any> {
    const upload = v2.uploader.upload_stream((error, result) => {
      if (error) {
        return error;
      }
      return result;
    });
    toStream(file.buffer).pipe(upload);
  }

  async deleteImage(publicId: string): Promise<any> {
    return await v2.uploader.destroy(publicId);
  }

  async updateImage(
    publicId: string,
    file: Express.Multer.File,
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    await this.deleteImage(publicId);
    return await this.uploadImage(file);
  }

  async getImages(): Promise<any> {
    return await v2.api.resources();
  }

  async getImage(publicId: string): Promise<any> {
    return await v2.api.resource(publicId);
  }
}
