import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  async findOne(cin: number): Promise<User | null> {
    return await this.userRepository.findOneBy({ cin });
  }

  async findUserByRefreshToken(refreshToken: string): Promise<User> {
    const user = await this.userRepository.findOneBy({refreshToken});
    if(!user){
      throw new NotFoundException('invalid refresh token')
    }
    return user;
  }

  async saveUser(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }
  
  async create(userDto: CreateUserDto) {
    const user = new User()
    user.cin = userDto.cin;
    user.password = await bcrypt.hash(userDto.password, 10);
    return this.userRepository.save(user);
  }
}