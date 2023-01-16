
export const DEFAULT_POST_COUNT_LIMIT = 25;
export const DEFAULT_SORT_DIRECTION = 'desc';


export enum PostSortType {
  Date = 'date',
  Likes = 'like',
  Comments = 'comment',
}

export const PostSortField = {
  [PostSortType.Date]: 'publishAt',
  [PostSortType.Likes]: 'likesCount',
  [PostSortType.Comments]: 'commentsCount',
};

export enum PostStatus {
  Publicate = 'Опубликована',
  Draft = 'Черновик'
}

