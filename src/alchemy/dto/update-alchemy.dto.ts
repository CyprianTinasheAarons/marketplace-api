import { PartialType } from '@nestjs/mapped-types';
import { CreateAlchemyDto } from './create-alchemy.dto';

export class UpdateAlchemyDto extends PartialType(CreateAlchemyDto) {}
