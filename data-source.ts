import * as path from 'path';
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { UserEntity } from 'src/entities/user.entity';

dotenv.config({ path: `.env` });

export const dataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  entities: [
    path.join(__dirname, 'src/entities/**/*.entity.{js, ts}'),
    path.join(__dirname, 'dist/entities/**/*.entity.{js, ts}'),
  ],
  synchronize: true,
  logging: true,
});
