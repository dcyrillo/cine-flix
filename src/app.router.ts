import { DirectorModule } from './director/director.module';
import { MovieModule } from './movie/movie.module';
import { Routes } from 'nest-router';
import { CategoryModule } from './category/category.module';

export const routes: Routes = [
  {
    path: 'directors',
    module: DirectorModule,
  },
  {
    path: 'movies',
    module: MovieModule,
  },
  {
    path: 'categories',
    module: CategoryModule,
  },
];
