import { Sequelize, Dialect } from 'sequelize';
import { join } from 'path';
import * as dotenv from 'dotenv';

// https://docs.w3cub.com/sequelize/manual/typescript - Sequelize with TypeScript

dotenv.config({ path: join(__dirname, '..', '..', '.env') });

export const sequelize = new Sequelize({
	dialect: process.env.DB_DIALECT as Dialect,
	host: process.env.DB_HOST as string,
	port: Number(process.env.DB_PORT),
	username: process.env.DB_USERNAME as string,
	password: process.env.DB_PASSWORD as string,
	database: process.env.DB_NAME as string,
});
