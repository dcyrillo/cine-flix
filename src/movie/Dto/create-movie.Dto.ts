import { IsNotEmpty } from "class-validator";

export class CreateMovieDto{
   
    @IsNotEmpty()
    name:String;
    @IsNotEmpty()
    category:String;
    @IsNotEmpty()
    year:number;
    @IsNotEmpty()
    director:String;

}