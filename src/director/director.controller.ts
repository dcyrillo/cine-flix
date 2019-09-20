import {
  Controller,
  Get,
  Param,
  NotFoundException,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { DirectorService } from './director.service';
import { Director } from './director.entity';
import { CreateDirectorDto } from './Dto/create-director.dto';

@Controller('directors')
export class DirectorController {
  constructor(private directorService: DirectorService) {}

  @Get()
  async findAll(): Promise<Director[]> {
    return this.directorService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id') id) {
    return this.directorService.findOne(id).then(data => {
      if (!data) {
        throw new NotFoundException('id for director not found');
      } else {
        return data;
      }
    });
  }

  @Post()
  async create(@Body() director: CreateDirectorDto) {
    return this.directorService.create(director);
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() director: CreateDirectorDto) {
    return this.directorService.update(id, director).then(data => {
      if (!data) {
        throw new NotFoundException('data or id not found for director');
      }
    });
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.directorService.delete(id);
  }
}
