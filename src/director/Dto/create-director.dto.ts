import {
  IsNotEmpty,
  Min,
  ValidatePromise,
  IsString,
  Length,
} from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateDirectorDto {
  @Min(0)
  @IsNotEmpty()
  @ValidatePromise()
  @IsString()
  @ApiModelProperty()
  id: string;

  @IsString()
  @IsNotEmpty()
  @Length(0, 255)
  @IsNotEmpty()
  @ApiModelProperty()
  name: string;

  @Min(0)
  @ValidatePromise()
  @IsNotEmpty()
  movieId: string;

  @IsNotEmpty()
  @Min(0)
  @ValidatePromise()
  @ApiModelProperty()
  directorId: string;
}
