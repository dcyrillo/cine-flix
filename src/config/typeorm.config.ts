import {TypeOrmModuleOptions} from "@nestjs/typeorm";
import { Movie } from "src/movie/movie.entity";
import { Category } from "src/category/category.entity";
import { Director } from "src/director/director.entity";

export const typeOrmConfig:TypeOrmModuleOptions={

    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'dudu',
    password: '32252269',
    database: 'desafiohaizencineback',
    entities: [__dirname + '/**/*.entity{.ts,.js}',Movie,Category,Director],
    synchronize: true,
}