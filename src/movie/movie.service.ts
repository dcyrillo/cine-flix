import { Injectable, Query, ValidationPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieRepository } from './movie.repository';
import { CreateMovieDto } from './Dto/create-movie.Dto';
import { Movie } from './movie.entity';
import { GetCategoriesDto } from './Dto/filter.dto';
import { UpdateMovieDto } from './Dto/update-movie.Dto';

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

  async findAll(): Promise<any[]> {
    return this.movieRepository
      .find({ relations: ['category', 'director'] })
      .then(data => {
        const aux = data.map(element => element.toJson());

        return aux;
      });
  }

  async findOne(id: string): Promise<Movie> {
    return this.movieRepository.findOne(id, {
      relations: ['category', 'director'],
    });
  }

  async getMoviesWithFilters(
    @Query(ValidationPipe) filterDto: GetCategoriesDto,
  ): Promise<any[]> {
    return this.movieRepository.getMovie(filterDto).then(data => {
      const aux = data.map(element => element.toJson());
      return aux;
    });
  }

  async update(id: string, movie: UpdateMovieDto): Promise<Movie> {
    if (await this.movieRepository.findOne(id)) {
      const auxMovie = new Movie().UpdateFromDto(movie);
      auxMovie.id = id;
      return this.movieRepository.save(auxMovie);
    } else {
      return null;
    }
  }
}
