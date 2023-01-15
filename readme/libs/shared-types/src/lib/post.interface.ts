export interface Post {
  id?: number;
  originalId?: number;
  createdAt?: Date;
  publishAt?: Date;
  userId: string;
  authorId: string;
  status: string;
  isRepost: boolean;
  typeId: number;
  commentsCount?: number;
  likesCount?: number;
  tags: string[];
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
