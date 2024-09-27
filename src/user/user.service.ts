import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import {
  ReadUser,
  ReadUserList,
  SuccessResponseMessage,
} from './interface/user.interface';
import { UserRepositoryService } from './user.repository.service';
import { Types } from 'mongoose';

@Injectable()
export class UserService {
  constructor(private readonly userRepoService: UserRepositoryService) {}
  async createUser(data: CreateUserDTO): Promise<SuccessResponseMessage> {
    console.log(data);

    await this.userRepoService.createUser(data);
    return { message: 'User created successfully' };
  }
  async updateUser(
    data: UpdateUserDTO,
    id: string,
  ): Promise<SuccessResponseMessage> {
    const userId = new Types.ObjectId(id);
    const isUserExist = await this.userRepoService.getUserById(userId);
    if (!isUserExist) {
      throw new BadRequestException('Invalid user id');
    }
    await this.userRepoService.updateUser(data, userId);
    return { message: 'User updated successfully' };
  }
  async deleteUser(id: string): Promise<SuccessResponseMessage> {
    const userId = new Types.ObjectId(id);
    const isUserExist = await this.userRepoService.getUserById(userId);
    if (!isUserExist) {
      throw new BadRequestException('Invalid user id');
    }
    await this.userRepoService.deleteUser(userId);
    return { message: 'User deleted successfully' };
  }
  async getUserById(id: string): Promise<ReadUser> {
    const userId = new Types.ObjectId(id);
    const isUserExist = await this.userRepoService.getUserById(userId);
    if (!isUserExist) {
      throw new BadRequestException('Invalid user id');
    }
    return {
      userId: isUserExist._id.toString(),
      name: isUserExist.name,
      age: isUserExist.age,
      salary: isUserExist.salary,
      userImage: isUserExist.userImage,
    };
  }
  async getAllUser(): Promise<ReadUserList> {
    const user = await this.userRepoService.getAllUser();

    return {
      items: user.map((user) => {
        return {
          userId: user._id.toString(),
          name: user.name,
          age: user.age,
          salary: user.salary,
          userImage: user.userImage,
        };
      }),
    };
  }
}
