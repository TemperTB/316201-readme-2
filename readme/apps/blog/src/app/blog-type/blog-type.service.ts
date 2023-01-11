import { Type } from '@readme/shared-types';
import { Injectable } from '@nestjs/common';
import { BlogTypeRepository } from './blog-type.repository';
import { CreateTypeDto } from './dto/create-type.dto';
import { BlogTypeEntity } from './blog-type.entity';
import { UpdateTypeDto } from './dto/update-type.dto';

@Injectable()
export class BlogTypeService {
  constructor(
    private readonly blogTypeRepository: BlogTypeRepository
  ) {}

  async createType(dto: CreateTypeDto): Promise<Type> {
    const typeEntity = new BlogTypeEntity(dto);
    return this.blogTypeRepository.create(typeEntity);
  }

  async deleteType(id: number): Promise<void> {
    this.blogTypeRepository.destroy(id);
  }

  async getType(id: number): Promise<Type> {
    return this.blogTypeRepository.findById(id);
  }

  async getTypes(): Promise<Type[]> {
    return this.blogTypeRepository.find();
  }

  async updateType(id: number, dto: UpdateTypeDto): Promise<Type> {
    return this.blogTypeRepository.update(id, new BlogTypeEntity(dto));
  }
}
