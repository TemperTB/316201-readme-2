
import { ApiProperty } from '@nestjs/swagger';
import {Expose} from 'class-transformer';

export class UserRdo {

  @ApiProperty({
    description: 'The uniq user ID',
    example: '777'
  })
  @Expose({ name: '_id'})
  public id: string;

  @ApiProperty({
    description: 'User avatar path',
    example: '/images/user.png'
  })
  @Expose()
  public avatar: string;

  @ApiProperty({
    description: 'User date register (ISO format)',
    example: '2022-01-01'
  })
  @Expose()
  public dayRegister: Date;

  @ApiProperty({
    description: 'User email',
    example: 'mail@mail.ru'
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'User  name',
    example: 'Aleksandr'
  })
  @Expose()
  public name: string;
}
