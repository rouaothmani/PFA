import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(userData: {
    cin: number | string;
    password: string;
    role: string;
  }): Promise<User> {
    const saltRounds = 10;
    const { password, cin, role } = userData;

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = new User();
      user.cin = typeof cin === 'string' ? parseInt(cin, 10) : cin;

    user.password = hashedPassword;
    user.role = role;

    return await this.userRepository.save(user);
}
}