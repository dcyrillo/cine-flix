import { BaseEntity, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, Column, ManyToOne } from "typeorm";
import { Movie } from "src/movie/movie.entity";



@Entity()
export class Category extends BaseEntity {


    @PrimaryGeneratedColumn("uuid")
<<<<<<< HEAD
    id: string;
=======
    id:string;
>>>>>>> feature/filter_movies
  
    @Column()
    name:string;
  
    @ManyToOne(type => Movie, movies => movies.categories)
    movies:Movie[];
    
}