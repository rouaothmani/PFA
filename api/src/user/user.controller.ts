import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
  Get,
  Param,
  Delete,
  Put,
  UseGuards,
  NotFoundException
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags('user')
@Controller('user')
@UseGuards(AuthGuard('jwt'))
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({ status: 201, description: 'User created successfully' })
  @UsePipes(new ValidationPipe())
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'get all users' })
  @ApiResponse({ status: 200, description: 'Users retrieved successfully' })
  async findAll() {
    return this.userService.findAll();
  }


  @Get(':cin')
  @ApiOperation({ summary: 'find one user by cin' })
  @ApiResponse({ status: 200, description: 'user retrieved successfully' })
  async findOne(@Param('cin') cin: number) {
    const user = await this.userService.findOne(cin);
    return user;
  }


  @Delete(':cin')
  @ApiOperation({ summary: 'delete a user by cin' })
  @ApiResponse({ status: 200, description: 'user deleted successfully' })
  async delete(@Param('cin') cin: number) {
    return await this.userService.delete(cin);
  }
  
  @Put(':cin')
  async update(@Param('cin') cin: number, @Body() updateUserDto: UpdateUserDto) {
    return await this.userService.update(cin, updateUserDto);
  }
}