import {
  IsNotEmpty,
  Min,
  ValidatePromise,
  IsString,
  Length,
} from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateDirectorDto {
  @IsString()
  @IsNotEmpty()
  @Length(0, 255)
  @IsNotEmpty()
  @ApiModelProperty()
  name: string;

  @ValidatePromise()
  @IsNotEmpty()
  movieId: string;

  @IsNotEmpty()
  @ValidatePromise()
  @ApiModelProperty()
  directorId: string;
}
