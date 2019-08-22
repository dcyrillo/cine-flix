import { Injectable } from '@nestjs/common';

@Injectable()
export class MovieService {

    private Movie=['pedro'];
    getAllMovies(){
        return this.Movie;
    }
}
