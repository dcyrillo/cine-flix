import { IsNotEmpty } from "class-validator";

export class CreateDirectorDto{
   
    id:number;
    @IsNotEmpty()
    name:String;
    @IsNotEmpty()
    directorId:number;
   
}