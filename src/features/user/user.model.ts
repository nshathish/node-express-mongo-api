import { Schema, model } from 'mongoose';

export interface User {
  name: string;
  email: string;
  createdOn: Date;
  updatedOn?: Date;
  lastLogin: Date;
}

const userSchema = new Schema<User>({
  name: { type: String },
  email: { type: String, unique: true },
  createdOn: { type: Date, default: Date.now },
  updatedOn: { type: Date },
  lastLogin: { type: Date, default: Date.now },
});

export const UserModel = model<User>('User', userSchema);