import express, { Application } from 'express';
import { join } from 'path';
import * as dotenv from 'dotenv';
import { router } from './router';

dotenv.config({ path: join(__dirname, '..', '.env') });

const app: Application = express();

app.use(router);

app.listen(process.env.PORT, () => {
	console.log(`Server running on port ${process.env.PORT}`);
});
