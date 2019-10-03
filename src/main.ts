import { ValidationPipe } from '@nestjs/common';
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

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  const db = require('./config/express');
  await app.listen(db || 3000);
}
bootstrap();
