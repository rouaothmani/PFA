import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';
import { UserService } from './src/auth/auth.service';
import * as bcrypt from 'bcrypt';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const userService = app.get(UserService);

  const saltRounds = 10;
  const passwordAdmin = await bcrypt.hash('pass', saltRounds);
  const passwordUser1 = await bcrypt.hash('pass', saltRounds);
  const passwordUser2 = await bcrypt.hash('test', saltRounds);

  const userAdmin = {
    cin: '123456789',
    password: passwordAdmin,
    role: 'admin',
  };

  const user1 = {
    cin: '987654321',
    password: passwordUser1,
    role: 'user',
  };

  const user2 = {
    cin: '111111111',
    password: passwordUser2,
    role: 'user',
  };

  await userService.create(userAdmin);
  await userService.create(user1);
  await userService.create(user2);
  console.log('users created succesfully');
  await app.close();
}

bootstrap();
