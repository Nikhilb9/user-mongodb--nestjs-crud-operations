import { Document, Types } from 'mongoose';

export interface CreateUser {
  name: string;
  userImage: string;
  age: number;
  salary: number;
}

export interface UpdateUser {
  name?: string;
  userImage?: string;
  age?: number;
  salary?: number;
}

export interface ReadUser {
  userId: string;
  name: string;
  userImage: string;
  age: number;
  salary: number;
}

export interface ReadUserList {
  items: ReadUser[];
}

export interface SuccessResponseMessage {
  message: string;
}

export interface User extends Document {
  name: string;
  userImage: string;
  age: number;
  salary: number;
  _id: Types.ObjectId;
}
