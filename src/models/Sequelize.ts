import { Sequelize } from 'sequelize';
import { join } from 'path';
import * as dotenv from 'dotenv';

dotenv.config({ path: join(__dirname, '../../.env') });

// https://docs.w3cub.com/sequelize/manual/typescript - Sequelize with TypeScript

export default new Sequelize(
	process.env.DB_NAME as string,
	process.env.DB_USER as string,
	process.env.DB_PASSWORD as string,
	{
		logging: false,
		host: process.env.DB_HOST as string,
		dialect: 'mysql',
		port: Number(process.env.DB_PORT),
		pool: {
			acquire: 30000,
			idle: 10000,
			max: 5,
			min: 0,
		},
	},
);
