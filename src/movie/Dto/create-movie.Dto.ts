import {
  IsNotEmpty,
  IsString,
  Length,
  Min,
  ValidatePromise,
} from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateMovieDto {
  @IsString()
  @IsNotEmpty()
  @Length(0, 255)
  @ApiModelProperty()
  name: string;

  @Min(0)
  @ValidatePromise()
  @IsNotEmpty()
  @ApiModelProperty()
  categoriesId: string;

  @Min(0)
  @ValidatePromise()
  @IsNotEmpty()
  @ApiModelProperty()
  directorId: string;

  @IsNotEmpty()
  @Length(0, 3)
  @IsNotEmpty()
  @ApiModelProperty()
  year: number;

  @IsNotEmpty()
  @IsString()
  @IsNotEmpty()
  @Length(0, 255)
  director: string;
}
