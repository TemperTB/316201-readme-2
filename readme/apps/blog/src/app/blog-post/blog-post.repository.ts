import { CRUDRepository } from '@readme/core';
import { BlogPostEntity } from './blog-post.entity';
import { Post } from '@readme/shared-types';
import { PrismaService } from '../../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { PostQuery } from './query/post.query';
import { PostSortField, PostStatus } from './blog-post.constant';

@Injectable()
export class BlogPostRepository implements CRUDRepository<BlogPostEntity, number, Post> {
  constructor(private readonly prisma: PrismaService) {}

  public async create(item: BlogPostEntity): Promise<Post> {
    const entityData = item.toObject();
    console.log(entityData);
    return this.prisma.post.create({
      data: {
        ...entityData,
      },
    });
  }

  public async destroy(id: number): Promise<void> {
    await this.prisma.post.delete({
      where: {
        id,
      }
    });
  }

  public async findById(id: number): Promise<Post | null> {
    return this.prisma.post.findFirst({
      where: {
        id
      },
      include: {
        type: true,
      }
    });
  }

  public find({limit, types, sortType, sortDirection, page, userId, statusPosts}: PostQuery): Promise<Post[]> {
    const sortField = { [PostSortField[sortType]]: sortDirection };
    const status = PostStatus[statusPosts];
    return this.prisma.post.findMany({
      where: {
        typeId: {
          in: types
        },
        userId,
        status,
      },
      take: limit,
      include: {
        type: true
      },
      orderBy: [
        {
          ...sortField
        }
      ],
      skip: page > 0 ? limit * (page - 1) : undefined,
    });
  }

  public update(_id: number, _item: BlogPostEntity): Promise<Post> {
    return Promise.resolve(undefined);
  }



}
