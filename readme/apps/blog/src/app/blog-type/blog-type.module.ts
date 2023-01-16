import { Module } from '@nestjs/common';
import { BlogTypeService } from './blog-type.service';
import { BlogTypeRepository } from './blog-type.repository';
import { BlogTypeController } from './blog-type.controller';

@Module({
  imports: [],
  controllers: [BlogTypeController],
  providers: [BlogTypeService, BlogTypeRepository],
  exports: [BlogTypeRepository]
})
export class BlogTypeModule {}
