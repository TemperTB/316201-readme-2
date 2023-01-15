import { ApiProperty } from "@nestjs/swagger";

export class CreatePostDto {

  @ApiProperty({
    description: 'Id пользователя этого поста',
    example: '15'
  })
  public userId: string;

  @ApiProperty({
    description: 'Id автора этого поста',
    example: '16'
  })
  public authorId: string;

  @ApiProperty({
    description: 'Статус опубликованности',
    example: 'Опубликована или Черновик'
  })
  public status: string;

  @ApiProperty({
    description: 'Это репост?',
    example: 'False'
  })
  public isRepost: boolean;

  @ApiProperty({
    description: 'Вид поста',
    example: 'Видео'
  })
  public type: string;

  @ApiProperty({
    description: 'Тэги для поста',
    example: '["Котики", "Ржака", "Круто"]'
  })
  public tags: string[];

  @ApiProperty({
    description: 'Название публикации',
    example: 'Лучшее название'
  })
  public title?: string;

  @ApiProperty({
    description: 'Ссылка на видео',
    example: 'https://youtube.com/231'
  })
  public linkVideo?: string;

  @ApiProperty({
    description: 'Анонс публикации',
    example: 'Анонс какого-то текста'
  })
  public announcementText?: string;

  @ApiProperty({
    description: 'Текст публикации',
    example: 'Какой-то текст'
  })
  public contentText?: string;

  @ApiProperty({
    description: 'Автор цитаты',
    example: 'Сергей Есенин'
  })
  public authorQuote?: string;

  @ApiProperty({
    description: 'Текст цитаты',
    example: 'Не говори ГОП, пока не перепрыгнешь'
  })
  public textQuote?: string;

  @ApiProperty({
    description: 'Фотография',
    example: 'Ссылка на фотографию'
  })
  public linkPhoto?: string;

  @ApiProperty({
    description: 'Ссылка',
    example: 'https://kinopoisk.ru/top/1'
  })
  public urlLink?: string;

  @ApiProperty({
    description: 'Описание ссылки',
    example: 'Побег из Шоушенка'
  })
  public descriptionLink?: string;
}

