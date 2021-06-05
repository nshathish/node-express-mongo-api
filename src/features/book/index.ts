import { Router, Request, Response } from 'express';

import { BookModel } from './book.model';

const bookRouter = Router();

bookRouter.route('/')
  .get(async (req: Request, res: Response) => {
    const query: any = {};
    if (req.query.genre) {
      query.genre = req.query.genre;
    }
    const books = await BookModel.find(query);
    res.json(books);
  });

bookRouter.route('/:bookId')
  .get(async (req: Request, res: Response) => {
    try {
      const book = await BookModel.findById(req.params.bookId).exec();
      if (book) {
        return res.json(book);
      }
      return res.status(401).json('not found');
    } catch (err) {
      res.status(500).json(err);
    }

  })

bookRouter.route('/')
  .post(async (req: Request, res: Response) => {
    const book = new BookModel(req.body);
    try {
      await book.save();
      res.status(201).json(book);
    } catch (err) {
      res.status(500).json({ err });
    }
  });

export default bookRouter