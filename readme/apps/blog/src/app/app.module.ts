import { Module } from '@nestjs/common';
import { BlogPostModule } from './blog-post/blog-post.module';
import { BlogTypeModule } from './blog-type/blog-type.module';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule, BlogPostModule, BlogTypeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
