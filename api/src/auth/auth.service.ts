import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  private users = [
    {
      email: 'user@example.com',
      password: 'password',
      role: 'user',
      refreshToken: null,
    },
    {
      email: 'admin@example.com',
      password: 'password',
      role: 'admin',
      refreshToken: null,
    },
  ];

  async login(credentials: any) {
    const user = this.users.find(
      (user) =>
        user.email === credentials.email &&
        user.password === credentials.password,
    );
    if (!user) {
      throw new UnauthorizedException();
    }
    const payload = { email: user.email, role: user.role };
    const token = this.jwtService.sign(payload);
    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: '7d',
    });
    user.refreshToken = refreshToken;
    return { token: token, refreshToken: refreshToken, role: user.role };
  }

  async refreshToken(refreshToken: string) {
    const user = this.users.find((user) => user.refreshToken === refreshToken);
    if (!user) {
      throw new UnauthorizedException();
    }
    const payload = { email: user.email, role: user.role };
    const token = this.jwtService.sign(payload);
    return { token: token };
  }
}
