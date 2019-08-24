import { EntityRepository, Repository } from "typeorm";
import{Movie} from '../movie/movie.entity';

@EntityRepository(Movie)
export class MovieRepository extends Repository<Movie>{

}