import { ApiProperty } from "@nestjs/swagger";
import {IsEmail, IsString} from 'class-validator';
import { AUTH_USER_EMAIL_NOT_VALID } from "../auth.constant";

export class LoginUserDto {

  @ApiProperty({
    description: 'Уникальный e-mail пользователя',
    example: 'user@user.ru',
  })
  @IsEmail(
    {},
    {message: AUTH_USER_EMAIL_NOT_VALID}
  )
  public email: string;

  @ApiProperty({
    description: 'Пароль',
    example: '123456'
  })
  @IsString()
  public password: string;
}



