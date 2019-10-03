import { IsNotEmpty, IsString, ValidatePromise } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  @ValidatePromise()
  @ApiModelProperty()
  name: string;
}
