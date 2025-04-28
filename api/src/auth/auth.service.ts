import {
  Injectable,
  UnauthorizedException,
  
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}


  async login(credentials: any) {
    const { cin, password } = credentials;
    const user = await this.userRepository.findOne({ where: { cin: cin } });

    if (!user) {
      throw new UnauthorizedException();
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException();
    }

    const payload = { cin: user.cin, role: user.role };
    const token = this.jwtService.sign(payload);

    return { token: token, role: user.role };
  } 
}
