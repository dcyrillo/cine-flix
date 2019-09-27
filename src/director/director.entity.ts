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
<<<<<<< HEAD
=======
import { ApiModelProperty } from '@nestjs/swagger';
>>>>>>> develop

@Entity()
export class Director extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @ApiModelProperty()
  id: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  @Length(0, 255)
  @Column()
  @ApiModelProperty()
  name: string;

  @ValidateNested()
  @ValidatePromise()
  @ApiModelProperty()
  @ManyToOne(() => Movie, movies => movies.director)
  movies: Movie[];

  createFromDto(data: CreateDirectorDto) {
    this.name = data.name;
<<<<<<< HEAD
    const movie = new Movie();
    movie.id = data.movieId;
=======
    const director = new Director();
    director.id = data.directorId;

>>>>>>> develop
    return this;
  }
}
