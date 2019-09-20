import { IsNotEmpty } from 'class-validator';

export class CreateMovieDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  categoriesId: string;
  @IsNotEmpty()
  directorId: string;
  @IsNotEmpty()
  year: number;
  @IsNotEmpty()
  director: string;
}
