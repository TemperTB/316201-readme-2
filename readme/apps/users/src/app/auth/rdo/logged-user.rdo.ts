import { ApiProperty } from '@nestjs/swagger';
import {Expose} from 'class-transformer';

export class LoggedUserRdo {

  @ApiProperty({
    description: 'The uniq user ID',
    example: '707'
  })
  @Expose({name: '_id'})
  public id: string;

  @ApiProperty({
    description: 'User email',
    example: 'mail@mail.ru'
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'Access token',
    example: 'mail@mail.ru'
  })
  @Expose()
  public accessToken: string;
}


