import { BaseEntity, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, Column, ManyToOne } from "typeorm";
import { Movie } from "src/movie/movie.entity";



@Entity()
export class Category extends BaseEntity {


    @PrimaryGeneratedColumn("uuid")
    id: number;
  
    @Column()
    name:String;
  
    @ManyToOne(type => Movie, movies => movies.categories)
    movies:Movie[];
    
}