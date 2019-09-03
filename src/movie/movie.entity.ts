import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Category } from "src/category/category.entity";
import { CreateMovieDto } from "./Dto/create-movie.Dto";



@Entity()
export class Movie extends  BaseEntity{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:String;
    
    @ManyToOne(type=> Category, categories=>categories.movies)
    categories:Category;
    
    @Column()
    year:number;
    
    @Column()
    director:String;

    createFromDto(data: CreateMovieDto) {
        this.name=data.name;
        this.year=data.year;
        this.director=data.director;
        const category = new Category();
        category.id = data.categoryId;
        this.categories = category;
    
        return this;
      }
}