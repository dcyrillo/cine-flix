import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from './movie/movie.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig),MovieModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
