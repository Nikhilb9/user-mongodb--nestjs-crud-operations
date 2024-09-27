import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateUser, UpdateUser, User } from './interface/user.interface';

@Injectable()
export class UserRepositoryService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async createUser(data: CreateUser): Promise<void> {
    await this.userModel.create(data);
  }
  async updateUser(data: UpdateUser, id: Types.ObjectId): Promise<void> {
    await this.userModel.updateOne({ _id: id }, data);
  }
  async deleteUser(id: Types.ObjectId): Promise<void> {
    await this.userModel.deleteOne({ _id: id });
  }
  async getUserById(id: Types.ObjectId): Promise<User> {
    return await this.userModel.findOne({ _id: id });
  }
  async getAllUser(): Promise<User[]> {
    return await this.userModel.find();
  }
}
