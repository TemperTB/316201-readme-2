import { Post, Comment, Type, } from '@readme/shared-types';
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
  public type: Type;
  public comments: Comment[];
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
    this.createdAt = new Date();
    this.publishAt = new Date();
    this.userId = entity.userId;
    this.authorId = entity.userId;
    this.status = entity.status;
    this.isRepost = entity.isRepost;
    this.type = entity.type;
    this.comments = entity.comments;
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
      comments: this.comments.map(({id}) => ({id})),
    };
  }

}
