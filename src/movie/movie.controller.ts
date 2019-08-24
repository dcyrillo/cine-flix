import { Controller, Get, ParseIntPipe, Param, Post, ValidationPipe, UsePipes, Body, Delete } from '@nestjs/common';
import { MovieService } from './movie.service';
import{Movie} from '../movie/movie.entity';
import { CreateMovieDto } from './Dto/create-movie.Dto';

@Controller('movie')
export class MovieController {
    constructor(private movieService:MovieService){}

    @Get('/:id')
    getMovieById(@Param('id',ParseIntPipe) id:number):Promise <Movie>{

        return this.movieService.getMovieById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createMovie(@Body() createMovieDto:CreateMovieDto):Promise<Movie>{
    
    return this.movieService.createMovie(createMovieDto);        

    }
    
    @Delete('/:id')
    deleteMOvie(@Param() id:number):Promise<void>{
        return this.movieService.deleteMovie(id);
        
    }

}
