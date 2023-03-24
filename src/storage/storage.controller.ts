import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { StorageService } from './storage.service';

@Controller('storage')
export class StorageController {
  constructor(private readonly storageService: StorageService) {}

  @Post('ipfs/upload')
  async ipfsUpload(@Body() metadata: any, @Res() res: any) {
    const response = await this.storageService.ipfsUpload(metadata);
    return res.status(HttpStatus.OK).json(response);
  }

  @Get('ipfs/download/:uri')
  async ipfsDownload(@Param('uri') uri: string, @Res() res: any) {
    const response = await this.storageService.ipfsDownload(uri);
    return res.status(HttpStatus.OK).json(response);
  }

  @Get('ipfs/resolve/:uri')
  async ipfsResolve(@Param('uri') uri: string, @Res() res: any) {
    const response = await this.storageService.ipfsResolve(uri);
    return res.status(HttpStatus.OK).json(response);
  }

  @Post('nftstorage/upload')
  async nftUpload(@Body() metadata: any, @Res() res: any) {
    const response = await this.storageService.nftUpload(metadata);
    return res.status(HttpStatus.OK).json(response);
  }

  @Post('nftstorage/upload/single')
  async nftUploadItem(
    @Body('image') image: any,
    @Body('name') name: string,
    @Body('description') description: string,
    @Res() res: any,
  ) {
    const response = await this.storageService.nftUploadItem(
      image,
      name,
      description,
    );
    return res.status(HttpStatus.OK).json(response);
  }
}
