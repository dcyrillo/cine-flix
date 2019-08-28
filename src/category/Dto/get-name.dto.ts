import { IsNotEmpty } from "class-validator";
import { Movie } from "src/movie/movie.entity";

export class FilterDto{
   
    @IsNotEmpty()
    name:Movie;
    @IsNotEmpty()
    search:string;

}