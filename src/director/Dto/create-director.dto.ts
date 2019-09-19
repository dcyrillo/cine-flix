import { IsNotEmpty } from "class-validator";

export class CreateDirectorDto{
   
    id:string;
<<<<<<< HEAD

    @IsNotEmpty()
    name:string;
    
    @IsNotEmpty()
    directorId:string;
=======
    @IsNotEmpty()
    name:string;
    @IsNotEmpty()
    directorid:string;
>>>>>>> feature/filter_movies
   
}