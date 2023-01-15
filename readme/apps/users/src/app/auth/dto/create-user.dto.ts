import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from 'class-validator';
import { AUTH_USER_EMAIL_NOT_VALID} from '../auth.constant';

export class CreateUserDto {

  @ApiProperty({
    description: 'Уникальный e-mail пользователя',
    example: 'user@user.ru'
  })
  @IsEmail(
    {},
    {message: AUTH_USER_EMAIL_NOT_VALID},
  )
  public email: string;

  @ApiProperty({
    description: 'Имя пользователя',
    example: 'Алексей',
  })
  @IsString()
  public name: string;

  @ApiProperty({
    description: 'Пароль пользователя',
    example: '123456'
  })
  @IsString()
  public password: string;
}
