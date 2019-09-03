import { Controller, Get, ParseIntPipe, Param, Post, ValidationPipe, UsePipes, Body, Delete, Patch, NotFoundException, Put } from '@nestjs/common';
import { MovieService } from './movie.service';
import{Movie} from './movie.entity';
import { CreateMovieDto } from './Dto/create-movie.Dto';


@Controller('movies')
export class MovieController {
    constructor(private movieService:MovieService,){}

    @Get()
    async findAll(): Promise<Movie[]> {
      return this.movieService.findAll();
    }
  
    @Get('/:id')
    async findOne(@Param('id') id) {
      return this.movieService.findOne(+id).then(data => {
        if (!data) {
          throw new NotFoundException("id not found");
        } else {
          return data;
        }
      });
    }
  
    @Post()
    async create(@Body() movie: CreateMovieDto) {
      return this.movieService.create(movie);
    }
  
    @Put('/:id')
    async update(
      @Param('id') id: number,
      @Body() movie: CreateMovieDto
    ) {
      return this.movieService.update(+id, movie).then(data => {
        if (!data) {
            throw new NotFoundException("data or id not found");
        }
      });
    }
  
    @Delete(':id')
     async delete(@Param('id') id: number) {
      return this.movieService.delete(id)
      
    }
  }

    /*
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
        
    ):Promise<Movie>{

        return this.movieService.updateCategory(id);
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
    }*/

