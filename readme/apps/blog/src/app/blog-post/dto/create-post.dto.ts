
export class CreatePostDto {
  public userId: string;
  public authorId: string;
  public status: string;
  public isRepost: boolean;
  public type: string;
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
}

