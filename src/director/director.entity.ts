import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Movie } from "src/movie/movie.entity";



@Entity()
export class Director extends BaseEntity {


    @PrimaryGeneratedColumn("uuid")
    id: number;
    @Column()
    name:String;
    @ManyToOne(type => Movie, movies => movies.director)
    movies:Movie[];
    
}