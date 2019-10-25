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
  IsNumber,
  Min,
} from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { UpdateMovieDto } from './Dto/update-movie.Dto';

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

  @Column()
  @IsString()
  @IsNotEmpty()
  @ApiModelProperty()
  image: string;

  @ValidateNested()
  @ApiModelProperty()
  @ValidatePromise()
  @ManyToOne(() => Category, category => category.movies)
  category: Category;

  @ApiModelProperty()
  @IsNotEmpty()
  @Column()
  @IsNumber()
  @Min(1900)
  year: number;

  @ApiModelProperty()
  @ValidateNested()
  @ManyToOne(() => Director, directors => directors.movies)
  @ValidatePromise()
  director: Director;

  createFromDto(data: CreateMovieDto) {
    this.name = data.name;
    this.year = data.year;
    this.image = data.image;
    const director = new Director();
    director.id = data.directorId;
    director.name;
    this.director = director;
    const category = new Category();
    category.id = data.categoryId;
    this.category = category;

    return this;
  }

  UpdateFromDto(data: CreateMovieDto) {
    this.name = data.name;
    this.year = data.year;
    const director = new Director();
    director.id = data.directorId;
    this.director = director;
    const category = new Category();
    category.id = data.categoryId;
    this.category = category;

    return this;
  }
  toJson() {
    const director = this.director ? this.director.id : '';
    const category = this.category ? this.category.id : '';
    return {
      id: this.id,
      name: this.name,
      year: this.year,
      image: this.image,
      directorId: director,
      categoryId: category,
    };
  }
}
