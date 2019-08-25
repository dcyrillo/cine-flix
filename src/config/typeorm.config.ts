import {TypeOrmModuleOptions} from "@nestjs/typeorm";
import { Movie } from "src/Movie/movie.entity";

export const typeOrmConfig:TypeOrmModuleOptions={

    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'dudu',
    password: '32252269',
    database: 'desafiohaizencineback',
    entities: [__dirname + '/**/*.entity{.ts,.js}',Movie],
    synchronize: true,
}