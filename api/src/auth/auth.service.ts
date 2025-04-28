import { Injectable, UnauthorizedException, Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/user/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async login(credentials: any) {
    console.log('credentials in service :>> ', credentials);
    const { cin, password } = credentials;

    const user = await this.userRepository.findOneBy({ cin });
    console.log('user :>> ', user);
    if (!user) {
      throw new UnauthorizedException();
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid){
      throw new UnauthorizedException();
    }

    if (!isPasswordValid) {
      throw new UnauthorizedException();
    }

    const payload = { cin: user.cin };
    const token = this.jwtService.sign(payload);
    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: '7d'
    });

    user.refreshToken = refreshToken;
    await this.userRepository.save(user);    

    return { token, refreshToken};
  }

  async refreshToken(refreshToken: string) {
    const user = await this.userRepository.findOneBy({ refreshToken }); 

    if (!user) {
      throw new UnauthorizedException();
    }

    const payload = { cin: user.cin }; 
    const token = this.jwtService.sign(payload);
    return { token: token };
  }
}
