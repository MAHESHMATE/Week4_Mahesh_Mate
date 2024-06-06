import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ error:'access denied!! no token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    (req as any) = decoded;
    next();
  } catch (error) {
    res.status(400).json({ error: 'Invalid token!!' });
  }
};
