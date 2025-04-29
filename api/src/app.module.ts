import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PassModule } from './pass/pass.module';

@Module({
   imports: [
      TypeOrmModule.forRoot({         
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgresql',
        database: 'agil',
        autoLoadEntities: true,
        synchronize: true,
        
      }),
      AuthModule,
      UserModule,
      PassModule
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
