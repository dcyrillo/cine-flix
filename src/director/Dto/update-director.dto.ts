import { IsNotEmpty, IsString, Length } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class UpdateDirectorDto {
  @IsString()
  @IsNotEmpty()
  @Length(0, 255)
  @IsNotEmpty()
  @ApiModelProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @Length(0, 255)
  @ApiModelProperty()
  image: string;
}
