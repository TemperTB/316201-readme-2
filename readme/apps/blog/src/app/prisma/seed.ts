import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function fillDb() {
  await prisma.type.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: 'Видео',
      posts: {
        create: [
          {
            original_id: 1,
            userId: '11',
            authorId: '11',
            status: 'Опубликована',
            title: 'Смешное видео с котиками',
            isRepost: false,
            linkVideo: 'https://youtube.com/funnyCatsVideo'
          },
        ]
      },
    }
  });
  await prisma.type.upsert({
    where: { id: 2 },
    update: {},
    create: {
      title: 'Текст',
      posts: {
        create: [
          {
            original_id: 2,
            userId: '12',
            authorId: '12',
            status: 'Опубликована',
            isRepost: false,
            title: 'Один день из жизни программиста',
            announcementText: 'Если вы думаете, что программисты сидят у бассейна, держа в руках ультрабук с экраном в 10 дюймов и пьют по 3-4 маргариты каждый день, то подумайте еще раз',
            contentText: 'Сегодня я расскажу вам одну позновательную историю о том, почему не нужно переучиваться и становиться программистом.'
          },
        ]
      },
    }
  });
  await prisma.type.upsert({
    where: { id: 2 },
    update: {},
    create: {
      title: 'Цитата',
      posts: {
        create: [
          {
            original_id: 3,
            userId: '13',
            authorId: '13',
            status: 'Опубликована',
            isRepost: false,
            authorQuote: 'Виталий Кличко',
            textQuote: 'А сегодня в завтрашний день не все могут смотреть. Вернее смотреть могут не только лишь все, мало кто может это делать'
          },
        ]
      },
    }
  });
  await prisma.type.upsert({
    where: { id: 4 },
    update: {},
    create: {
      title: 'Фотография',
      posts: {
        create: [
          {
            original_id: 4,
            userId: '14',
            authorId: '14',
            status: 'Опубликована',
            isRepost: false,
            linkPhoto: 'https://photo.ru/photo/1'
          },
        ]
      },
    }
  });
  await prisma.type.upsert({
    where: { id: 5 },
    update: {},
    create: {
      title: 'Ссылка',
      posts: {
        create: [
          {
            original_id: 5,
            userId: '15',
            authorId: '15',
            status: 'Опубликована',
            isRepost: false,
            urlLink: 'https://ru.wikipedia.org/wiki/PostgreSQL',
            descriptionLink: 'PostgreSQL'
          },
        ]
      },
    }
  });

  console.info('🤘️ Database was filled')
}

fillDb()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect()

    process.exit(1);
  })
