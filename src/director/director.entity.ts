import { Movie } from './../movie/movie.entity';
import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';

import {
  ValidateNested,
  ValidatePromise,
  IsNotEmpty,
  Length,
  IsString,
} from 'class-validator';
import { CreateDirectorDto } from './Dto/create-director.dto';
import { ApiModelProperty } from '@nestjs/swagger';
import { UpdateDirectorDto } from './Dto/update-director.dto';

@Entity()
export class Director extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  @Length(0, 255)
  @Column()
  @ApiModelProperty()
  name: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  @ApiModelProperty()
  image: string;

  @ValidateNested()
  @ValidatePromise()
  @ApiModelProperty()
  @ManyToOne(() => Movie, movies => movies.director)
  movies: Movie[];

  createFromDto(data: CreateDirectorDto) {
    this.name = data.name;
    this.image = data.image;
    return this;
  }

  updateFromDto(data: UpdateDirectorDto) {
    this.name = data.name;
    this.image = data.image;
    return this;
  }
}
