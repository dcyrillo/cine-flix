import { BaseEntity, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { Movie } from "src/movie/movie.entity";


@Entity()
export class Category extends BaseEntity {


    @PrimaryGeneratedColumn()
    id: number;
    
    @OneToOne( type => Movie)
    @JoinColumn()
    name:Movie
}