import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
   imports: [
      TypeOrmModule.forRoot({         
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'mysecretpassword',
        database: 'pfa',
        autoLoadEntities: true,
        synchronize: true,
        
      }),
      AuthModule
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
