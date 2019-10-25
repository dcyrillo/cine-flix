export default {
  type: 'mysql',

  host: process.env.TYPEORM_HOST,

  username: process.env.TYPEORM_USERNAME,

  password: process.env.TYPEORM_PASSWORD,

  database: process.env.TYPEORM_DATABASE,

  port: Number(process.env.TYPEORM_PORT),

  entities: [__dirname + '/../**/*.entity{.ts,.js}'],

  synchronize: process.env.TYPEORM_SYNCHRONIZE,

  migrations: [__dirname + '/migrations/*{.ts,.js}'],

  cli: {
    migrationsDir: 'src/migrations',
  },
};
