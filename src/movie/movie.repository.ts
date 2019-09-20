import { EntityRepository, Repository } from 'typeorm';
import { Movie } from './movie.entity';
import { GetCategoriesDto } from './Dto/filter.dto';

@EntityRepository(Movie)
export class MovieRepository extends Repository<Movie> {
  async getOrderCategory(filterDto: GetCategoriesDto) {
    const { categoryId } = filterDto;
    const query = this.createQueryBuilder('movie');

    if (categoryId) {
      query.andWhere('movie.categoryId=:categoryId', { categoryId });
    }
    const movie = await query.getMany();
    return movie;
  }
}
