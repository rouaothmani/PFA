import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from 'src/user/dto/login.dto';



@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UsePipes(new ValidationPipe())
  @Post('login')
  async login(@Body() credentials: LoginDto) {
    console.log('credentials in crontroller:>> ', credentials);
    return await this.authService.login(credentials);
  }
}