import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
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
    const user = await this.userRepository.findOneBy({ cin });
    if(!user){
      throw new NotFoundException("user not found")
    }
    return user;
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

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async delete(cin: number) {
    const user = await this.findOne(cin)
    if(!user){
      throw new NotFoundException("user not found")
    }
    return await this.userRepository.delete(user);
  }

  async update(cin: number, userDto: any): Promise<User> {
    const user = await this.findOne(cin);
    if(!user){
      throw new NotFoundException("user not found");
    }
    if(userDto.password){
      user.password = await this.hashPassword(userDto.password);
    }
    return this.userRepository.save(user);
  }

  async hashPassword(password : string){
    return await bcrypt.hash(password,10)
  }
}