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

@Entity()
export class Movie extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(type => Category, categories => categories.movies)
  categories: Category;

  @Column()
  year: number;

  @ManyToOne(type => Director, directors => directors.movies)
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
