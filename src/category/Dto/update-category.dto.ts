import { IsNotEmpty, IsString, ValidatePromise } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class UpdateCategoryDto {
  @IsNotEmpty()
  @IsString()
  @ValidatePromise()
  @ApiModelProperty()
  name: string;
}
