import {BlogPostRepository} from './blog-post.repository';
import {CreatePostDto} from './dto/create-post.dto';
import {Post} from '@readme/shared-types';
import {BlogPostEntity} from './blog-post.entity';
import {UpdatePostDto} from './dto/update-post.dto';
import {Injectable} from '@nestjs/common';
import {BlogTypeRepository} from '../blog-type/blog-type.repository';
import { PostQuery } from './query/post.query';

@Injectable()
export class BlogPostService {
  constructor(
    private readonly blogPostRepository: BlogPostRepository,
    private readonly blogTypeRepository: BlogTypeRepository
  ) {}

  async createPost(dto: CreatePostDto): Promise<Post> {
    const type = await this.blogTypeRepository.find(dto.type);
    const typeId = type.id;
    const postEntity = new BlogPostEntity({ ...dto, typeId});
    return this.blogPostRepository.create(postEntity);
  }

  async deletePost(id: number): Promise<void> {
    this.blogPostRepository.destroy(id);
  }

  async getPost(id: number): Promise<Post> {
    return this.blogPostRepository.findById(id);
  }

  async getPosts(query: PostQuery): Promise<Post[]> {
    return this.blogPostRepository.find(query);
  }

  async updatePost(_id: number, _dto: UpdatePostDto): Promise<Post> {
    throw new Error('Not implemented…');
  }

}
