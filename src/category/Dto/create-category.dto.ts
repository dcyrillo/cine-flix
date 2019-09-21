import { IsNotEmpty, Min, ValidatePromise } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  @Min(0)
  @ValidatePromise()
  id: string;
}
