import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { Movie } from 'src/movie/movie.entity';
import {
  ValidateNested,
  ValidatePromise,
  IsNotEmpty,
  Length,
  IsString,
} from 'class-validator';

@Entity()
export class Director extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  @Length(0, 255)
  @Column()
  name: string;

  @ValidateNested()
  @ValidatePromise()
  @ManyToOne(() => Movie, movies => movies.director)
  movies: Movie[];
}
