import { Mongoose } from 'mongoose';
import { config } from 'dotenv';

import app from './server';
import initializeDbConnection from './db';

config();

const mongoUrl = process.env.MONGO_DB_URL;


initializeDbConnection(mongoUrl)
  .then(() => {
    const server = app.listen(3000, () => console.log('Server started successfully'));
  })
  .catch(err => {
    console.error('DB Connection Error', err);
    process.exit(1);
  });

process.on('SIGINT', () => {
  console.log('exiting...');
  process.exit(0);
});

