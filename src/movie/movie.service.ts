import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieRepository } from './movie.repository';
import{Movie} from './movie.entity';
import { CreateMovieDto } from './Dto/create-movie.Dto';

@Injectable()
export class MovieService {

   constructor(
       @InjectRepository(MovieRepository)
       private movieRepository: MovieRepository,
   ){}


  async createMovie(createMovieDtro:CreateMovieDto):Promise<Movie>{
      
  return this.movieRepository.createMovie(createMovieDtro);

 } 
   async getMovieById(id:number):Promise<Movie>{
       const found= await this.movieRepository.findOne(id);
       if(!found){
           
           throw new NotFoundException("movie not found");
       }
       return found;

   }
   async deleteMovie( id:number):Promise<void>{
    const result= await this.movieRepository.delete(id);
    if(result.affected==0){
        throw new NotFoundException ("id not found");
    }
    }

  
    async updateName(id:number, name:String ):Promise<Movie>{
        const movie=await this.getMovieById(id);
        movie.name=name;
        await movie.save();

        return movie;
    }
   async updateCategory(id:number, category:String ):Promise<Movie>{
        const movie=await this.getMovieById(id);
        movie.category=category;
        await movie.save();

        return movie;
    }
    async updateYear(id:number , year:number):Promise<Movie>{

        const movie=await this.getMovieById(id);
        movie.year=year;
        await movie.save();

        return movie;
        
    }
    async updateDirector(id:number ,director:String){
        
        const movie=await this.getMovieById(id);
        movie.director=director;
        await movie.save();

        return movie;
    }


}
