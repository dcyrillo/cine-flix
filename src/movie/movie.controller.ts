import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  NotFoundException,
  Put,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { Movie } from './movie.entity';
import { CreateMovieDto } from './Dto/create-movie.Dto';
import { GetCategoriesDto } from './Dto/filter.dto';

@Controller('movies')
export class MovieController {
  constructor(private movieService: MovieService) {}
  @Get()
  async findAll(): Promise<Movie[]> {
    return this.movieService.findAll();
  }
  @Get()
  async getMovie(
    @Query(ValidationPipe) filterDto: GetCategoriesDto,
  ): Promise<Movie[]> {
    return this.movieService.getMovie(filterDto);
  }
  @Get('/:id')
  async findOne(@Param('id') id) {
    return this.movieService.findOne(id).then(data => {
      if (!data) {
        throw new NotFoundException('id not found');
      } else {
        return data;
      }
    });
  }

  @Post()
  async create(@Body() movie: CreateMovieDto) {
    return this.movieService.create(movie);
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() movie: CreateMovieDto) {
    return this.movieService.update(id, movie).then(data => {
      if (!data) {
        throw new NotFoundException('data or id not found');
      }
    });
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.movieService.delete(id);
  }
}
