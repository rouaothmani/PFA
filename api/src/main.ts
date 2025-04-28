import { NestFactory } from '@nestjs/core'; // Import NestFactory
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('ISIM API')
    .setDescription('The ISIM API description')
    .setVersion('1.0')
    .addTag('isim')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = process.env.PORT ?? 3000;
  await app.listen(port); // Use the port variable to listen on the specified port
  console.log(`App is running on http://localhost:${port}/api`)
}
bootstrap();
