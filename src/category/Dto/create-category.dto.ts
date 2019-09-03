import { IsNotEmpty } from "class-validator";

export class CreateCategoryDto{
   
    @IsNotEmpty()
    id:number;
    @IsNotEmpty()
    search:string;

}