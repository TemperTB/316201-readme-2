import { Type } from './type.interface';
import { Comment } from './comment.interface';

export interface Post {
  id?: number;
  original_id?: number;
  createdAt?: Date;
  publishAt?: Date;
  userId: string;
  authorId?: string;
  status?: string;
  isRepost?: boolean;
  types: Type[];
  comments?: Comment[];
  tags?: string[];
  title?: string;
  linkVideo?: string;
  announcementText?: string;
  contentText?: string;
  authorQuote?: string;
  textQuote?: string;
  linkPhoto?: string;
  urlLink?: string;
  descriptionLink?: string;
}
