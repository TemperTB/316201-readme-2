import { Type } from './type.interface';
import { Comment } from './comment.interface';

export interface Post {
  id?: number;
  originalId?: number;
  createdAt?: Date;
  publishAt?: Date;
  userId: string;
  authorId?: string;
  status?: string;
  isRepost?: boolean;
  type?: Type;
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
