import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
   imports: [
      TypeOrmModule.forRoot({         
        type: 'sqlite',
        database: 'db.sqlite',
        autoLoadEntities: true,
        entities: [],
        synchronize: true,
      }),
      AuthModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
