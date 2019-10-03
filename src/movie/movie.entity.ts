import { Director } from './../director/director.entity';
import { Category } from './../category/category.entity';

import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';

import { CreateMovieDto } from './Dto/create-movie.Dto';

import {
  ValidateNested,
  ValidatePromise,
  IsNotEmpty,
  Length,
  IsString,
} from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class Movie extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @ApiModelProperty()
  id: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  @Length(0, 255)
  @ApiModelProperty()
  name: string;

  @ValidateNested()
  @ApiModelProperty()
  @ValidatePromise()
  @ManyToOne(() => Category, categories => categories.movies)
  categories: Category;

  @IsNotEmpty()
  @Column()
  @ApiModelProperty()
  year: number;

  @ValidateNested()
  @ManyToOne(() => Director, directors => directors.movies)
  @ValidatePromise()
  @ApiModelProperty()
  director: Director;

  createFromDto(data: CreateMovieDto) {
    this.name = data.name;
    this.year = data.year;
    const director = new Director();
    director.id = data.directorId;
    this.director = director;
    const category = new Category();
    category.id = data.categoriesId;
    this.categories = category;

    return this;
  }
}
