import { EntityRepository, Repository } from 'typeorm';
import { Movie } from './movie.entity';
import { GetCategoriesDto } from './Dto/filter.dto';

@EntityRepository(Movie)
export class MovieRepository extends Repository<Movie> {
  async getMovie(filterDto: GetCategoriesDto): Promise<Movie[]> {
    const { categoriesId } = filterDto;

    const query = this.createQueryBuilder('movie');

    if (categoriesId) {
      query.andWhere('movie.categoriesId=:categoriesId', { categoriesId });
    }

    const movies = await query.getMany();

    return movies;
  }
}
