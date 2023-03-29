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
import {
  ApiBearerAuth,
  ApiBody,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@ApiTags('Storage')
@Controller('storage')
export class StorageController {
  constructor(private readonly storageService: StorageService) {}

  @Post('ipfs/upload')
  @ApiBody({
    description: 'Metadata',
    type: Object,
  })
  @ApiOkResponse({
    description: 'Upload to IPFS',
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized',
  })
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
  @ApiBody({
    description: 'Metadata',
    type: Object,
  })
  @ApiOkResponse({
    description: 'Upload to NFT Storage',
  })
  async nftUpload(@Body() metadata: any, @Res() res: any) {
    const response = await this.storageService.nftUpload(metadata);
    return res.status(HttpStatus.OK).json(response);
  }

  @Post('nftstorage/upload/single')
  @ApiBody({
    description: 'image, name, description',
    type: Object,
  })
  @ApiOkResponse({
    description: 'Upload to NFT Storage',
  })
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
