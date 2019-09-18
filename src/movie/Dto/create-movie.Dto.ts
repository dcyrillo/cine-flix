import { IsNotEmpty } from "class-validator";
import { Category } from "src/category/category.entity";

export class CreateMovieDto{
   
    @IsNotEmpty()
    name:string;
    @IsNotEmpty()
    categoriesId:string;
    @IsNotEmpty()
    directorId:string;
    @IsNotEmpty()
    year:number;
    @IsNotEmpty()
    director:string;

}