import { Schema, model } from 'mongoose';

export interface Book {
  title: string;
  author: string;
  genre: string;
  isRead: boolean;
}

const bookSchema = new Schema<Book>({
  title: { type: String },
  author: { type: String },
  genre: { type: String },
  read: { type: Boolean, default: false },
});

export const BookModel = model<Book>('Book', bookSchema);