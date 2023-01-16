import { ApiProperty } from '@nestjs/swagger';
import {Expose} from 'class-transformer';

export class LoggedUserRdo {

  @ApiProperty({
    description: 'ID пользователя (уникален)',
    example: '707'
  })
  @Expose({name: '_id'})
  public id: string;

  @ApiProperty({
    description: 'E-mail пользователя',
    example: 'mail@mail.ru'
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'Токен доступа',
    example: 'mail@mail.ru'
  })
  @Expose()
  public accessToken: string;
}


