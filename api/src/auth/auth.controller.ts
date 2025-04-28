import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { IsNotEmpty, IsNumber, IsString, Length, Matches } from 'class-validator';

export class LoginCredentialsDto {
  @IsNotEmpty()
  @IsString()
  @Length(9, 9)
  @Matches(/^[0-9]+$/, {
    message: 'cin must contain only digits',
  })
  cin: number;

  @IsNotEmpty()
  @IsString()
  password: string;
}

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @UsePipes(new ValidationPipe())

  @Post('login')
  async login(@Body() credentials: LoginCredentialsDto) {
    return await this.authService.login(credentials);
  }
}
