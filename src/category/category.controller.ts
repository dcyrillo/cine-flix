import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { CategoryService } from './category.service';

import { Category } from './category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryRepository } from './category.repository';
import { FilterDto } from './Dto/get-name.dto';

@Controller('category')
export class CategoryController {

    constructor(
    @InjectRepository(CategoryRepository)
    private categoryRepository){}

    @Get()
    getMovie(@Query(ValidationPipe) filterDto:FilterDto):Promise<Category[]>{
    
    return this.categoryRepository.getMovie(filterDto);
    
    }
 
}
