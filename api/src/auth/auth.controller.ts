import { Controller, Post, Body, UsePipes, ValidationPipe, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class LoginCredentialsDto {
  @IsNotEmpty()
  @IsNumber()
  cin: number;

  @IsNotEmpty()
  @IsString()
  password: string;
}

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() credentials: LoginCredentialsDto) {
    return await this.authService.login(credentials);
  }
}
