import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import dotenvFlow = require('dotenv-flow');
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('CineFlix')
    .setDescription('Its seems like a netflix , but its not hahah')
    .setVersion('1.0.0')
    .addTag('movies')
    .addTag('directors')
    .addTag('categories')
    .build();
  dotenvFlow.config();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
