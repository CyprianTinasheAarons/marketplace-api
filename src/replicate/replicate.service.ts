import { Injectable } from '@nestjs/common';
import { CreateReplicateDto } from './dto/create-replicate.dto';
import { UpdateReplicateDto } from './dto/update-replicate.dto';

@Injectable()
export class ReplicateService {
  async createPrediction(
    createReplicateDto: CreateReplicateDto,
  ): Promise<any> {}
}
