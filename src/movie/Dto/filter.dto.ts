import { ValidatePromise } from 'class-validator';

export class GetCategoriesDto {
  @ValidatePromise()
  categoriesId: string;
}
