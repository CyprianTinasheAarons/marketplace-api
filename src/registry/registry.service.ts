import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRegistryDto } from './dto/create-registry.dto';
import { UpdateRegistryDto } from './dto/update-registry.dto';
import { Registry, RegistryDocument } from './schema/registry.schema';

@Injectable()
export class RegistryService {
  constructor(
    @InjectModel(Registry.name)
    private readonly registryModel: Model<RegistryDocument>,
  ) {}

  async create(
    createRegistryDto: CreateRegistryDto,
  ): Promise<RegistryDocument> {
    const registry = new this.registryModel(createRegistryDto);
    return registry.save();
  }

  async findAll(): Promise<RegistryDocument[]> {
    return this.registryModel.find().exec();
  }

  async findOne(id: string) {
    return this.registryModel.findById(id);
  }

  async update(
    id: string,
    UpdateRegistryDto: UpdateRegistryDto,
  ): Promise<RegistryDocument> {
    return this.registryModel.findByIdAndUpdate(id, UpdateRegistryDto);
  }

  async remove(id: string) {
    return this.registryModel.findByIdAndRemove(id);
  }
}
