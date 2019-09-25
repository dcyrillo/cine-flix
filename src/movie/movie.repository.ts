import { EntityRepository, Repository } from 'typeorm';
import { Movie } from './movie.entity';
import { GetCategoriesDto } from './Dto/filter.dto';

@EntityRepository(Movie)
export class MovieRepository extends Repository<Movie> {
  async getMovie(filterDto: GetCategoriesDto) {
    const { categoriesId, search } = filterDto;
    const query = this.createQueryBuilder('movies');

    if (categoriesId) {
      query.andWhere('movie.categoriesId=:categoriesId', { categoriesId });
    }
    if (search) {
      query.andWhere('movie.name=:search', { search });
    }
    const movie = await query.getMany();
    return movie;
  }
}
