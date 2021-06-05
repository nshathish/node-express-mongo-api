import { connect, Mongoose } from 'mongoose';

export default async function initializeDbConnection(url?: string): Promise<void> {
  if (!url) {
    throw new Error('empty mongo db connection string');
  }

  await connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log('DB connection successful');
}