import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @UsePipes(new ValidationPipe())
  async login(@Body() credentials: any) {
    const result = await this.authService.login(credentials);
    return result;
  }

  @Post('refresh')
  @UsePipes(new ValidationPipe())
  async refresh(@Body('refreshToken') refreshToken: string) {
    if (!refreshToken) {
      return { message: 'Refresh token is required' };
    }
    try {
      return await this.authService.refreshToken(refreshToken);
    } catch (error) {
      return error;
    }
  }
}
