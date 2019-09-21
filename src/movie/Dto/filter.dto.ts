import { Min, ValidatePromise, IsNotEmpty } from 'class-validator';

export class GetCategoriesDto {
  @Min(0)
  @ValidatePromise()
  @IsNotEmpty()
  categoryId: string;
}
