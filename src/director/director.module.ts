import { Module } from '@nestjs/common';
import { DirectorService } from './director.service';
import { DirectorController } from './director.controller';
import { DirectorRepository } from './director.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DirectorRepository])],
  providers: [DirectorService],
  controllers: [DirectorController],
})
export class DirectorModule {}
