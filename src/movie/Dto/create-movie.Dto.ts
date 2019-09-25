import {
  IsNotEmpty,
  IsString,
  Length,
  Min,
  ValidatePromise,
} from 'class-validator';

export class CreateMovieDto {
  @Min(0)
  @ValidatePromise()
  @IsNotEmpty()
  movieId: string;

  @IsString()
  @IsNotEmpty()
  @Length(0, 255)
  name: string;

  @Min(0)
  @ValidatePromise()
  @IsNotEmpty()
  categoriesId: string;

  @Min(0)
  @ValidatePromise()
  @IsNotEmpty()
  directorId: string;

  @IsNotEmpty()
  @Length(0, 3)
  @IsNotEmpty()
  year: number;
}
