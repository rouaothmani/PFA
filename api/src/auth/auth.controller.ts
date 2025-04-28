import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from './dto/create-user.dto';



@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService, private userService : UserService) {}
  
  @UsePipes(new ValidationPipe())
  @Post('login')
  async login(@Body() credentials: LoginDto) {
    return await this.authService.login(credentials);
  }


  @Post('create')
  @UsePipes(new ValidationPipe())
  async create(@Body() newUser: CreateUserDto) {
    return await this.userService.create(newUser)
  }
}