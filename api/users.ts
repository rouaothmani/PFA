import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const userService = app.get(UserService);

  const saltRounds = 10;
  const passwordAdmin = await bcrypt.hash('pass', saltRounds);
  const passwordUser1 = await bcrypt.hash('pass', saltRounds);
  const passwordUser2 = await bcrypt.hash('test', saltRounds);

  const userAdmin = {
    cin: 12345678,
    password: passwordAdmin,

  };

  const user1 = {
    cin: 98765432,
    password: passwordUser1,

  };

  const user2 = {
    cin: 11111111,
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
