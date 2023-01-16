import { CRUDRepository } from '@readme/core';
import { BlogTypeEntity } from './blog-type.entity';
import { Type } from '@readme/shared-types';
import { PrismaService } from '../../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BlogTypeRepository implements CRUDRepository<BlogTypeEntity, number, Type> {
  constructor(private readonly prisma: PrismaService) {}

  public async create(item: BlogTypeEntity): Promise<Type> {
    return this.prisma.type.create({
      data: { ...item.toObject() }
    });
  }

  public async destroy(id: number): Promise<void> {
    await this.prisma.type.delete({
      where: {
        id,
      }
    });
  }

  public findById(id: number): Promise<Type | null> {
    return this.prisma.type.findFirst({
      where: {
        id
      }
    });
  }

  public findAll(ids: number[] = []): Promise<Type[]> {
    return this.prisma.type.findMany({
      where: {
        id: {
          in: ids.length > 0 ? ids : undefined
        }
      }
    });
  }

  public find(title: string): Promise<Type> {
    return this.prisma.type.findFirst({
      where: {
        title
      }
    });
  }

  public update(id: number, item: BlogTypeEntity): Promise<Type> {
    return this.prisma.type.update({
      where: {
        id
      },
      data: { ...item.toObject(), id}
    });
  }
}
