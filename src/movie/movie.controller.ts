import { Controller, Get, ParseIntPipe, Param } from '@nestjs/common';
import { MovieService } from './movie.service';
import{Movie} from '../movie/movie.entity';

@Controller('movie')
export class MovieController {
    constructor(private movieService:MovieService){}

    @Get('/:id')
    getMovieById(@Param('id',ParseIntPipe) id:number):Promise <Movie>{

        return this.movieService.getMovieById(id);
    }
}
