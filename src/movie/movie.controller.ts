import { Controller, Get, ParseIntPipe, Param, Post, ValidationPipe, UsePipes, Body, Delete, Patch } from '@nestjs/common';
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

    @Patch('/:id/name')
    updateNameMovie(
        @Param('id',ParseIntPipe) id:number,
        @Body('name',ValidationPipe) name:String 
    ):Promise<Movie>{

        return this.movieService.updateName(id,name);
    }

    @Patch('/:id/category')
    updateCategoryMovie(
        @Param('id',ParseIntPipe) id:number,
        @Body('category',ValidationPipe) category:String 
    ):Promise<Movie>{

        return this.movieService.updateCategory(id,category);
    }

    @Patch('/:id/year')
    updateYearMovie(
        @Param('id',ParseIntPipe) id:number,
        @Body('year',ParseIntPipe) year:number 
    ):Promise<Movie>{

        return this.movieService.updateYear(id,year);
    }
    @Patch('/:id/director')
    updateDirectorMovie(
        @Param('id',ParseIntPipe) id:number,
        @Body('director',ValidationPipe) director:String 
    ):Promise<Movie>{

        return this.movieService.updateDirector(id,director);
    }
}
