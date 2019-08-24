import { EntityRepository, Repository } from "typeorm";
import{Movie} from '../movie/movie.entity';
import {CreateMovieDto} from './Dto/create-movie.Dto'
@EntityRepository(Movie)
export class MovieRepository extends Repository<Movie>{

    async createMovie(createMovieDtro:CreateMovieDto):Promise<Movie>{
        const {name ,category,year,director} = createMovieDtro;
        const movie=new Movie();
        
        movie.name=name;
        movie.category=category;
        movie.year=year;
        movie.director=director;
 
        await movie.save();
        return movie;

   }
}