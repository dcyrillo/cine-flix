import { Injectable } from '@nestjs/common';
import { Category } from './category.entity';
import { CategoryRepository } from './category.repository';
import { CreateCategoryDto } from './Dto/create-category.dto';


@Injectable()
export class CategoryService {

    constructor(
        
        private readonly categoryRepository:CategoryRepository 
      ) {}
    
      async create(category:CreateCategoryDto) {
        return this.categoryRepository.save(category);
      }
    
<<<<<<< HEAD
      async delete(id: string): Promise<void> {
=======
      async delete(id:string): Promise<void> {
>>>>>>> feature/filter_movies
         this.categoryRepository.delete(id);
      }
    
      async findAll(): Promise<Category[]> {
        return this.categoryRepository.find();
      }
    
<<<<<<< HEAD
      async findOne(id: string): Promise<Category> {
        return this.categoryRepository.findOne(id);
      }
    
      async update(id: string, category:CreateCategoryDto): Promise<Category> {
=======
      async findOne(id:string): Promise<Category> {
        return this.categoryRepository.findOne(id);
      }
    
      async update(id:string, category:CreateCategoryDto): Promise<Category> {
>>>>>>> feature/filter_movies
        if (await this.categoryRepository.findOne(id)) {
          category.id = id;
          return this.categoryRepository.save(category);
        } else {
          return undefined;
        }
      }
}
