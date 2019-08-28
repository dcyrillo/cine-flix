import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { type } from "os";
import {Movie} from '../movie/movie.entity'

@Entity()
export class Category extends  BaseEntity{

    
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    @OneToOne(type=> Movie)
    name:Movie;
    
}