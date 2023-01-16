import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query} from '@nestjs/common';
import { BlogPostService } from './blog-post.service';
import { fillObject } from '@readme/core';
import { PostRdo } from './rdo/post.rdo';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdateTypeDto } from '../blog-type/dto/update-type.dto';
import { PostQuery } from './query/post.query';

@Controller('posts')
export class BlogPostController {
  constructor(
    private readonly blogPostService: BlogPostService
  ) {}

  @Get('/:id')
  async show(@Param('id') id: number) {
    const existPost = await this.blogPostService.getPost(id);
    return fillObject(PostRdo, existPost);
  }

  @Get('/')
  async index(@Query () query: PostQuery) {
    const posts = await this.blogPostService.getPosts(query);
    return fillObject(PostRdo, posts);
  }

  @Post('/')
  async create(@Body() dto: CreatePostDto) {
    const newPost = await this.blogPostService.createPost(dto);
    return fillObject(PostRdo, newPost);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id') id: number) {
    this.blogPostService.deletePost(id);
  }

  @Patch('/:id')
  async update(@Param('id') id: number, @Body() dto: UpdateTypeDto) {
    const updatedPost = await this.blogPostService.updatePost(id, dto);
    return fillObject(PostRdo, updatedPost)
  }
}


//TODO OpenAPI сделать документацию
