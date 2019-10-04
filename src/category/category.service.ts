import { Injectable } from '@nestjs/common';
import { Category } from './category.entity';
import { CategoryRepository } from './category.repository';
import { CreateCategoryDto } from './Dto/create-category.dto';
import { UpdateCategoryDto } from './Dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async create(category: CreateCategoryDto) {
    return this.categoryRepository.save(category);
  }

  async delete(id: string): Promise<void> {
    this.categoryRepository.delete(id);
  }

  async findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  async findOne(id: string): Promise<Category> {
    return this.categoryRepository.findOne(id);
  }

  async update(name: string, category: UpdateCategoryDto): Promise<Category> {
    if (await this.categoryRepository.findOne(name)) {
      category.name = name;
      return this.categoryRepository.save(category);
    } else {
      return undefined;
    }
  }
}
