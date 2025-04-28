import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({ secret: 'your-secret-key' }),
  ],

  controllers: [AuthController],
  providers: [AuthService,
    UserService
  ],
  exports: [AuthService,
    UserService
  ],
})
export class AuthModule {}
