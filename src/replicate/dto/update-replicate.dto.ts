import { PartialType } from '@nestjs/swagger';
import { CreateReplicateDto } from './create-replicate.dto';

export class UpdateReplicateDto extends PartialType(CreateReplicateDto) {}
