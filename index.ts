import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Post } from './entity/Post';

const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'db',
  port: 3306,
  username: 'root',
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: [Post],
  synchronize: true,
  logging: false,
});

AppDataSource.initialize()
  .then(async () => {
    console.log('database initialized');
    await AppDataSource.destroy();
  })
  .catch((error) => console.log(error));
