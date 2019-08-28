import { Controller, Get, Query } from '@nestjs/common';
import { CategoryService } from './category.service';

import { Category } from './category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryRepository } from './category.repository';

@Controller('category')
export class CategoryController {

    constructor(@InjectRepository(CategoryRepository)
    private categoryRepository){}

}
