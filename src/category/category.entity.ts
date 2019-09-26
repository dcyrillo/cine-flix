import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { Movie } from 'src/movie/movie.entity';
import {
  IsNotEmpty,
  Length,
  IsString,
  ValidateNested,
  ValidatePromise,
} from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @ApiModelProperty()
  id: string;

  @IsString()
  @IsNotEmpty()
  @Length(0, 255)
  @Column()
  @ApiModelProperty()
  name: string;

  @ValidateNested()
  @ValidatePromise()
  @ApiModelProperty()
  @ManyToOne(() => Movie, movies => movies.categories)
  movies: Movie[];
}
