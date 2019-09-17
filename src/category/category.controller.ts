import { Controller, Get, Param, HttpException, NotFoundException, Post, Body, Put, Delete } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './category.entity';
import { CreateCategoryDto } from './Dto/create-category.dto';

@Controller('categories')
export class CategoryController {

    constructor(private readonly categoriesService:CategoryService) {}

    @Get()
    async findAll(): Promise<Category[]> {
      return this.categoriesService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id) {
      return this.categoriesService.findOne(id).then(data => {
        if (!data) {
          throw new NotFoundException("Category Not Found");
        } else {
          return data;
        }
      });
    }
  
    @Post()
    async create(@Body() category:CreateCategoryDto) {
      return this.categoriesService.create(category);
    }
  
    @Put(':id')
    async update(@Param('id') id:string, @Body() category:CreateCategoryDto) {
      return this.categoriesService.update(id, category).then(data => {
        if (!data) {
          throw new NotFoundException("Cannot put category");
        }
      });
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string) {
      return this.categoriesService.delete(id);
}

}
