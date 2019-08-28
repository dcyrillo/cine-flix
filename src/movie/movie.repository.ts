import { EntityRepository, Repository } from "typeorm";
import{Movie} from './movie.entity';
import {CreateMovieDto} from './Dto/create-movie.Dto'
import { FiltersDto } from "./Dto/filter-movie.Dto";
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
   async getMovie(filterDto:FiltersDto):Promise<Movie[]>{
       
    const {name,search}=filterDto;
    const query =this.createQueryBuilder('movie');
    if (name){
        query.andWhere('movie.name=:name',{name});
    }
    if (name){
        query.andWhere('task.title:search OR task.descricao LIKE search',{search});
    }
    const movie=await query.getMany();
    return movie; 
}
}