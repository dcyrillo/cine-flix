import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Movie extends  BaseEntity{

    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:String;
    @Column()
    category:String;
    @Column()
    year:number;
    @Column()
    director:String;
}