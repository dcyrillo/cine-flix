import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { Category } from 'src/category/category.entity';
import { CreateMovieDto } from './Dto/create-movie.Dto';
import { Director } from 'src/director/director.entity';
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
  @Length(0, 3)
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
    const category = new Category();
    category.id = data.categoriesId;
    this.categories = category;

    return this;
  }
}
