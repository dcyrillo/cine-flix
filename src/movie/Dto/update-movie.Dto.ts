import { IsNotEmpty, IsString, Length, ValidatePromise } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class UpdateMovieDto {
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

  @IsNotEmpty()
  @IsNotEmpty()
  @ApiModelProperty()
  year: number;
}
