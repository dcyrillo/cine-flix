import { IsNotEmpty, IsString, Length, ValidatePromise } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateMovieDto {
  @IsString()
  @IsNotEmpty()
  @Length(0, 255)
  @ApiModelProperty()
  name: string;

  @ValidatePromise()
  @IsNotEmpty()
  @ApiModelProperty()
  categoryId: string;

  @ValidatePromise()
  @IsNotEmpty()
  @ApiModelProperty()
  directorId: string;

  @ApiModelProperty()
  @IsNotEmpty()
  year: number;

  @IsString()
  @IsNotEmpty()
  @ApiModelProperty()
  image: string;
}
