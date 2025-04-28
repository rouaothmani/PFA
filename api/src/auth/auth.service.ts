import {
  Injectable,
  UnauthorizedException,
  InternalServerErrorException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import * as fs from 'fs';
import * as path from 'path';

interface User {
  cin: string;
  passwordHash: string;
  role: string;
}

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  private usersFilePath = path.join(__dirname, 'users.json');
  private users: User[] = [];

  private async loadUsers(): Promise<void> {
    try {
      if (!fs.existsSync(this.usersFilePath)) {
        fs.writeFileSync(this.usersFilePath, JSON.stringify([]));
      }
      const data = fs.readFileSync(this.usersFilePath, 'utf-8');
      const parsedUsers = JSON.parse(data) as User[];
      for (const user of parsedUsers) {
        if (!user.passwordHash.startsWith('$2b$')) {
          user.passwordHash = await bcrypt.hash(user.passwordHash, 10);
        }
      }
      this.users = parsedUsers;
    } catch (err) {
      console.error('Failed to load users from file', err);
      throw new InternalServerErrorException('Failed to load user data');
    }
  }

  private async saveUsers(): Promise<void> {
    try {
      fs.writeFileSync(this.usersFilePath, JSON.stringify(this.users));
    } catch (err) {
      console.error('Failed to save users to file', err);
      throw new InternalServerErrorException('Failed to save user data');
    }
  }

  async login(credentials: any) {
    await this.loadUsers();
    const { cin, password } = credentials;
    const user = this.users.find((user) => user.cin === cin);

    if (!user) {
      throw new UnauthorizedException();
    }

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordValid) {
      throw new UnauthorizedException();
    }

    const payload = { cin: user.cin, role: user.role };
    const token = this.jwtService.sign(payload);

    return { token: token, role: user.role };
  }
  async createDefaultUser(): Promise<void> {
    await this.loadUsers();
    if(this.users.length == 0){
        this.users.push({ cin: "admin", passwordHash: await bcrypt.hash("admin",10), role: "admin"})
        await this.saveUsers();
    }
  }
}
