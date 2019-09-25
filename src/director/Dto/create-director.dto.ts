import {
  IsNotEmpty,
  Min,
  ValidatePromise,
  IsString,
  Length,
} from 'class-validator';

export class CreateDirectorDto {
  @Min(0)
  @IsNotEmpty()
  @ValidatePromise()
  @IsString()
  id: string;

  @IsString()
  @IsNotEmpty()
  @Length(0, 255)
  @IsNotEmpty()
  name: string;

  @Min(0)
  @ValidatePromise()
  @IsNotEmpty()
  movieId: string;

  @IsNotEmpty()
  @Min(0)
  @ValidatePromise()
  directorId: string;
}
