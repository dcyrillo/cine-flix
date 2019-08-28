import { EntityRepository, Repository } from "typeorm";
import { Category } from './category.entity';
import { FilterDto } from "./Dto/get-name.dto";
@EntityRepository(Category)
export class CategoryRepository extends Repository<Category>{

     async getMovie(filterDto: FilterDto): Promise<Category[]> {

        const { name, search } = filterDto;
        const query = this.createQueryBuilder('movie');
        if (name.name) {
            query.andWhere('name.name=:name', { name });
        }
        if (name) {
            query.andWhere('task.title:search OR task.descricao LIKE search', { search });
        }
        const category = await query.getMany();
        return category;
    }
}


