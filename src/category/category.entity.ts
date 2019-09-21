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

@Entity()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @IsString()
  @IsNotEmpty()
  @Length(0, 255)
  @Column()
  name: string;

  @ValidateNested()
  @ValidatePromise()
  @ManyToOne(() => Movie, movies => movies.categories)
  movies: Movie[];
}
