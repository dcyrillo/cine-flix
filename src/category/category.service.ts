import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {

    /*async getMovie(filterDto: FiltersDto): Promise<Category> {

        const { name, search } = filterDto;
        const query = this.createQueryBuilder('movie');
        if (name) {
            query.andWhere('movie.name=:name', { name });
        }
        if (name) {
            query.andWhere('task.title:search OR task.descricao LIKE search', { search });
        }
        const Movie = await query.getMany();
        return Movie;
    }*/
}
