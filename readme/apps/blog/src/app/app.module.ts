import { Module } from '@nestjs/common';
import { BlogTypeModule } from './blog-type/blog-type.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, BlogTypeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
