import { IsNotEmpty, Min, ValidatePromise } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @IsNotEmpty()
  @Min(0)
  @ValidatePromise()
  @ApiModelProperty()
  id: string;
}
