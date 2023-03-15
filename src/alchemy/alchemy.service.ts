import { Injectable } from '@nestjs/common';
import { CreateAlchemyDto } from './dto/create-alchemy.dto';
import { UpdateAlchemyDto } from './dto/update-alchemy.dto';

@Injectable()
export class AlchemyService {
  create(createAlchemyDto: CreateAlchemyDto) {
    return 'This action adds a new alchemy';
  }

  findAll() {
    return `This action returns all alchemy`;
  }

  findOne(id: number) {
    return `This action returns a #${id} alchemy`;
  }

  update(id: number, updateAlchemyDto: UpdateAlchemyDto) {
    return `This action updates a #${id} alchemy`;
  }

  remove(id: number) {
    return `This action removes a #${id} alchemy`;
  }
}
