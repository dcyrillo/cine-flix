import { ValidatePromise } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class GetCategoriesDto {
  @ValidatePromise()
  @ApiModelProperty()
  categoryId: string;
}
