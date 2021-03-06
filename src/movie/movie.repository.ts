import { EntityRepository, Repository } from 'typeorm';
import { Movie } from './movie.entity';
import { GetCategoriesDto } from './Dto/filter.dto';

@EntityRepository(Movie)
export class MovieRepository extends Repository<Movie> {
  async getMovie(filterDto: GetCategoriesDto): Promise<any[]> {
    const { categoryId } = filterDto;

    const query = this.createQueryBuilder('movie')
      .leftJoinAndSelect('movie.category', 'category')
      .leftJoinAndSelect('movie.director', 'director');

    if (categoryId) {
      query.andWhere('movie.categoryId=:categoryId', { categoryId });
    }

    const movies = await query.getMany();

    return movies;
  }
}
