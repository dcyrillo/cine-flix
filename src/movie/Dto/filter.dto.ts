import { Min, ValidatePromise, IsNotEmpty } from 'class-validator';

export class GetCategoriesDto {
  @Min(0)
  @ValidatePromise()
  @IsNotEmpty()
  categoriesId: string;

  @Min(0)
  @ValidatePromise()
  @IsNotEmpty()
  search: String;
}
