import { Movie } from './../movie/movie.entity';
import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';

import {
  IsNotEmpty,
  Length,
  IsString,
  ValidateNested,
  ValidatePromise,
} from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { CreateCategoryDto } from './Dto/create-category.dto';

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
  @OneToMany(() => Movie, movies => movies.category)
  movies: Movie[];

  createFromDto(data: CreateCategoryDto) {
    this.name = data.name;

    return this;
  }
}
