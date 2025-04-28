import { Controller, Post, Body, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { IsNotEmpty, IsString, Length, Matches } from 'class-validator';
import { UserService } from './user.service';

export class LoginCredentialsDto {
  @IsNotEmpty()
  
  @Matches(/^[0-9]+$/, {
    message: 'cin must contain only digits',
  })
  @Length(9, 9)
  cin: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
export class CreateUserDto {
  @IsNotEmpty()
  @Matches(/^[0-9]+$/, {
    message: 'cin must contain only digits',
  })
  @Length(9, 9)
  cin: string;

  @IsNotEmpty()
  @IsString()
  password: string;
  @IsNotEmpty()
  @IsString()
  role:string;
}

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService, private userService : UserService) {}
  @UsePipes(new ValidationPipe())
  @Post('login')
  async login(@Body() credentials: LoginCredentialsDto) {
    return await this.authService.login(credentials);
  }
  @Post('create')
  async create(@Body() newUser:CreateUserDto) {
    return await this.userService.create(newUser)
  }
}
