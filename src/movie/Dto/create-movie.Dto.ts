import { IsNotEmpty } from "class-validator";
import { Category } from "src/category/category.entity";

export class CreateMovieDto{
   
    @IsNotEmpty()
    name:String;
    @IsNotEmpty()
    categoriesId:number;
    @IsNotEmpty()
    directorId:number;
    @IsNotEmpty()
    year:number;
    @IsNotEmpty()
    director:String;

}