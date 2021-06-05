import { Router, Request, Response } from 'express';

import { UserModel } from './user.model';

const userRouter = Router();

userRouter.route('/')
  .post(async (req: Request, res: Response) => {
    const user = new UserModel(req.body);
    try {
      await user.save();
      res.status(201).json(user);
    } catch (err) {
      res.status(500).json(err);
    }

  });

export default userRouter;