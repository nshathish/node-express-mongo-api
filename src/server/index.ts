import express from 'express';

import bookRouter from '../features/book';
import userRouter from '../features/user';

const app = express();
app.use(express.json());

app.use('/api/books', bookRouter);
app.use('/api/users', userRouter);



export default app;