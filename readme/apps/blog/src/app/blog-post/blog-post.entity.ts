import { Post } from '@readme/shared-types';
import { Entity } from '@readme/core';

export class BlogPostEntity implements Entity<BlogPostEntity>, Post {
  public id: number;
  public originalId: number;
  public createdAt: Date;
  public publishAt: Date;
  public userId: string;
  public authorId: string;
  public status: string;
  public isRepost: boolean;
  public typeId: number;
  public commentsCount: number;
  public likesCount: number;
  public tags: string[];
  public title: string;
  public linkVideo: string;
  public announcementText: string;
  public contentText: string;
  public authorQuote: string;
  public textQuote: string;
  public linkPhoto: string;
  public urlLink: string;
  public descriptionLink: string;

  constructor(post: Post) {
    this.fillEntity(post);
  }

  public fillEntity(entity: Post): void {
    this.originalId = entity.originalId || entity.id;
    this.createdAt = new Date();
    this.publishAt = new Date();
    this.userId = entity.userId;
    this.authorId = entity.userId;
    this.status = entity.status;
    this.isRepost = entity.isRepost;
    this.typeId = entity.typeId;
    this.commentsCount = entity.commentsCount || 0;
    this.likesCount = entity.likesCount || 0;
    this.tags = entity.tags;
    this.title = entity.title;
    this.linkVideo = entity.linkVideo;
    this.announcementText = entity.announcementText;
    this.contentText = entity.contentText;
    this.authorQuote = entity.authorQuote;
    this.textQuote = entity.textQuote;
    this.linkPhoto = entity.linkPhoto;
    this.urlLink = entity.urlLink;
    this.descriptionLink = entity.descriptionLink;

  }

  public toObject(): BlogPostEntity {
    return {
      ...this,
    };
  }

}
