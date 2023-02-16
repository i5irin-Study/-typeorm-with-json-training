import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Author } from './entity/Author';
import { App } from './entity/App';

const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'db',
  port: 3306,
  username: 'root',
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: [App, Author],
  synchronize: true,
  logging: false,
});

AppDataSource.initialize()
  .then(async () => {
    console.log('database initialized');
    const appRepo = AppDataSource.getRepository(App);
    const authorRepo = AppDataSource.getRepository(Author);
    const tsutchie = await authorRepo.save(authorRepo.create({
      name: 'Akira Tsuchiya',
    }));
    const trinary = await appRepo.save(appRepo.create({
      title: 'Augmented reality girls Trinary',
      body: 'Fantastic inter-world communication application.',
      isPublished: true,
      authorId: tsutchie.id,
    }));
    console.log(trinary);
    const surge = await appRepo.save(appRepo.create({
      title: 'Ciel Nosurge',
      body: 'Miraculous cross-world communication application.',
      isPublished: true,
      author: tsutchie,
    }));
    console.log(surge);
    
    console.log('show list');
    const surgetri = await appRepo.find({
      relations: {
        author: true,
      },
    });
    console.log(surgetri)
    await AppDataSource.destroy();
  })
  .catch((error) => console.log(error));
