import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieRepository } from './movie.repository';
import { CreateMovieDto } from './Dto/create-movie.Dto';
import { Movie } from './movie.entity';
import { GetCategoriesDto } from './Dto/filter.dto';
import { Category } from 'src/category/category.entity';

@Injectable()
export class MovieService {

   constructor(
       @InjectRepository(MovieRepository)
       private movieRepository: MovieRepository,
   ){}
 
   async create(movie:CreateMovieDto) {
    const auxMovie = new Movie().createFromDto(movie);

    return this.movieRepository.save(auxMovie).then(data => {
      auxMovie.id = data.id;
      return auxMovie;
    });
  }

  async delete(id:string): Promise<void> {
       this.movieRepository.delete(id);
  }

  async findAll(): Promise<Movie[]> {
    return this.movieRepository.find({});
  }

  async findOne(id:string): Promise<Movie> {
    return this.movieRepository.findOne(id, { relations: ['category'] });
  }

  async findOrder(filterDto:GetCategoriesDto):Promise<Movie[]>{
    return this.movieRepository.getOrderCategory(filterDto);
  }
  async update(
    id:string,
    movie:CreateMovieDto
  ): Promise<Movie> {
    if (await this.movieRepository.findOne(id)) {
      const auxMovie = new Movie().createFromDto(movie);
      auxMovie.id = id;
      return this.movieRepository.save(auxMovie);
    } else {
      return null;
    }
  }
}



