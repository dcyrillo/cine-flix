import { IsNotEmpty } from "class-validator";
import { Category } from "src/category/category.entity";

export class CreateMovieDto{
   
    @IsNotEmpty()
    name:String;
    @IsNotEmpty()
    categoryId:number;
    @IsNotEmpty()
    year:number;
    @IsNotEmpty()
    director:String;

}