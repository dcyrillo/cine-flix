import { IsNotEmpty } from 'class-validator';

export class CreateDirectorDto {
  id: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  directorId: string;
}
