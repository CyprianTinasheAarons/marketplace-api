import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ReplicateService } from './replicate.service';
import { CreateReplicateDto } from './dto/create-replicate.dto';
import { UpdateReplicateDto } from './dto/update-replicate.dto';

@Controller('replicate')
export class ReplicateController {
  constructor(private readonly replicateService: ReplicateService) {}
}
