import { Expose } from 'class-transformer';
import { Comment, Type} from '@readme/shared-types';

export class PostRdo {
  @Expose()
  public id: number;

  @Expose()
  public originalId: number;

  @Expose()
  public createdAt: string;

  @Expose()
  public publishAt: string;

  @Expose()
  public userId: string;

  @Expose()
  public authorId: string;

  @Expose()
  public status: string;

  @Expose()
  public isRepost: boolean;

  @Expose()
  public type: Type;

  @Expose()
  public comments: Comment[]

  @Expose()
  public tags: string[];

  @Expose()
  public title: string;

  @Expose()
  public linkVideo: string;

  @Expose()
  public announcementText: string;

  @Expose()
  public contentText: string;

  @Expose()
  public authorQuote: string;

  @Expose()
  public textQuote: string;

  @Expose()
  public linkPhoto: string;

  @Expose()
  public urlLink: string;

  @Expose()
  public descriptionLink: string;

}


//TODO OpenAPI сделать документацию
