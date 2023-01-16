import { IsArray, IsIn, IsNumber, IsOptional, IsEnum } from 'class-validator';
import { Transform } from 'class-transformer';
import { DEFAULT_POST_COUNT_LIMIT, DEFAULT_SORT_DIRECTION, PostSortType, PostStatus } from '../blog-post.constant';

export class PostQuery {

  @Transform(({ value } ) => +value || DEFAULT_POST_COUNT_LIMIT)
  @IsNumber()
  @IsOptional()
  public limit = DEFAULT_POST_COUNT_LIMIT;

  @Transform(({ value }) => value.split(',').map((typeId) => +typeId))
  @IsArray({})
  @IsOptional()
  public types?: number[];

  @IsOptional()
  public userId?: string;

  @IsOptional()
  public statusPosts? = PostStatus.Publicate;


  @IsIn(['asc', 'desc'])
  @IsOptional()
  public sortDirection: 'desc' | 'asc' = DEFAULT_SORT_DIRECTION;

  @IsEnum(PostSortType)
  @IsOptional()
  public sortType?: PostSortType = PostSortType.Date;


  @Transform(({ value }) => +value)
  @IsOptional()
  public page: number;
}


