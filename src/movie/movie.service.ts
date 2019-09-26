import { Injectable, Query, ValidationPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieRepository } from './movie.repository';
import { CreateMovieDto } from './Dto/create-movie.Dto';
import { Movie } from './movie.entity';
import { GetCategoriesDto } from './Dto/filter.dto';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(MovieRepository)
    private movieRepository: MovieRepository,
  ) {}

  async create(movie: CreateMovieDto) {
    const auxMovie = new Movie().createFromDto(movie);

    return this.movieRepository.save(auxMovie).then(data => {
      auxMovie.id = data.id;
      return auxMovie;
    });
  }

  async delete(id: string): Promise<void> {
    this.movieRepository.delete(id);
  }

  async findAll(): Promise<Movie[]> {
    return this.movieRepository.find({ relations: ['categories', 'director'] });
  }

  async findOne(id: string): Promise<Movie> {
    return this.movieRepository.findOne(id, {
      relations: ['categories', 'director'],
    });
  }

  async getMoviesWithFilters(
    @Query(ValidationPipe) filterDto: GetCategoriesDto,
  ): Promise<Movie[]> {
    return this.movieRepository.getMovie(filterDto);
  }

  async update(id: string, movie: CreateMovieDto): Promise<Movie> {
    if (await this.movieRepository.findOne(id)) {
      const auxMovie = new Movie().createFromDto(movie);
      auxMovie.id = id;
      return this.movieRepository.save(auxMovie);
    } else {
      return null;
    }
  }
}
