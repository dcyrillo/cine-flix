

import { IsOptional,  IsNotEmpty } from "class-validator";

export class FiltersDto{
     @IsOptional()
     @IsNotEmpty()
     name:String;
     @IsOptional()
     @IsNotEmpty()
     search:String;


}