import express, { Application } from 'express';
import { join } from 'path';
import * as dotenv from 'dotenv';
import { router } from './router';
import compression from 'compression';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import './models/';

dotenv.config({ path: join(__dirname, '..', '.env') });
const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(compression());
app.use(
	cors({
		origin: process.env.CLIENT_URL,
	}),
);
app.use(router);

app.listen(process.env.PORT, () => {
	console.log(`Server running on port ${process.env.PORT}`);
});
