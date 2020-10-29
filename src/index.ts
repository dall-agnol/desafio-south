import application from './app';
import database from './database/db';
import dotenv from 'dotenv-safe';

dotenv.config();
database()
.then(() => application(3000))
.catch(err => console.log(err));