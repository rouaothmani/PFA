import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from './user.entity';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly userService: UserService,
  ) { }

  async login(credentials: any) {
    const { cin, password } = credentials;
    const user = await this.userService.findOne(cin);

    if (!user) {
      throw new UnauthorizedException();
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException();
    }

    const payload = { cin: user.cin, role: user.role };
    const token = this.jwtService.sign(payload);
    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: '7d',
    });
    
    //store refresh token 
    user.refreshToken = refreshToken;
    //save the new user
    await this.userService.saveUser(user);

    return { token: token, refreshToken: refreshToken, role: user.role };
  }
  async refreshToken(refreshToken: string) {
    const user = await this.userService.findUserByRefreshToken(refreshToken);
    const payload = { cin: user.cin, role: user.role };
    const token = this.jwtService.sign(payload);
    return { token: token };
  }
}
