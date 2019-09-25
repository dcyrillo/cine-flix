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
import { CreateDirectorDto } from './Dto/create-director.dto';

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

  createFromDto(data: CreateDirectorDto) {
    this.name = data.name;
    const movie = new Movie();
    movie.id = data.movieId;
    return this;
  }
}
