import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Movie } from "src/movie/movie.entity";



@Entity()
export class Director extends BaseEntity {


    @PrimaryGeneratedColumn("uuid")
<<<<<<< HEAD
    id: string;
=======
    id:string;
>>>>>>> feature/filter_movies
    @Column()
    name:string;
    @ManyToOne(type => Movie, movies => movies.director)
    movies:Movie[];
    
}