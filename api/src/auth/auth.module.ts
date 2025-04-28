import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt'; // Import JwtModule

@Module({
  imports: [
    JwtModule.register({ secret: 'your-secret-key' }) // Configure JwtModule
  ],
  controllers: [AuthController],
  providers: [AuthService], // Add AuthService to providers
  exports: [AuthService] // Export AuthService
})
export class AuthModule { }
