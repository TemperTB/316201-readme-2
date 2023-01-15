
import { ApiProperty, } from '@nestjs/swagger';
import {Expose, Transform} from 'class-transformer';

export class UserRdo {

  @ApiProperty({
    description: 'ID пользователя (уникален)',
    example: '777'
  })
  @Transform(({ obj }) => obj._id.toString())
  @Expose({ name: '_id'})
  public id: string;

  @ApiProperty({
    description: 'Путь к аватару пользователя',
    example: '/images/user.png'
  })
  @Expose()
  public avatar: string;

  @ApiProperty({
    description: 'Дата регистрации пользователя (ISO format)',
    example: '2022-01-01'
  })
  @Expose()
  public dayRegister: Date;

  @ApiProperty({
    description: 'E-mail пользователя',
    example: 'mail@mail.ru'
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'User name',
    example: 'Алексей'
  })
  @Expose()
  public name: string;
}
