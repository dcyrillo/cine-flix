import { IsNotEmpty } from "class-validator";

export class CreateCategoryDto{
   
    @IsNotEmpty()
    id:string;
    @IsNotEmpty()
    search:string;

}