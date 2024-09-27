import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserService } from './user.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { SuccessResponseMessage } from './interface/user.interface';
import { ReadUserDTO } from './dto/read-user.dto';
import { ReadUserListDTO } from './dto/read-user-list.dto';
import { SuccessResponseMessageDTO } from './dto/response.message.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { ParamUserIdDTO } from './dto/param.id.dto';
import { Types } from 'mongoose';
@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiOkResponse({
    status: 200,
    description: 'Create user',
    type: () => SuccessResponseMessageDTO,
  })
  @Post('/create')
  async createUser(
    @Body() body: CreateUserDTO,
  ): Promise<SuccessResponseMessage> {
    return this.userService.createUser(body);
  }

  @ApiOkResponse({
    status: 200,
    description: 'Update user',
    type: () => SuccessResponseMessageDTO,
  })
  @Put('/update/:id')
  async updateUser(
    @Body() body: UpdateUserDTO,
    @Param() param: ParamUserIdDTO,
  ): Promise<SuccessResponseMessage> {
    return this.userService.updateUser(body, param.id);
  }

  @ApiOkResponse({
    status: 200,
    description: 'Delete user',
    type: () => SuccessResponseMessageDTO,
  })
  @Delete('/delete/:id')
  async deleteUser(
    @Param() param: ParamUserIdDTO,
  ): Promise<SuccessResponseMessage> {
    return this.userService.deleteUser(param.id);
  }

  @ApiOkResponse({
    status: 200,
    description: 'All users',
    type: () => ReadUserListDTO,
  })
  @Get('/list')
  async getUserList(): Promise<ReadUserListDTO> {
    return this.userService.getAllUser();
  }

  @ApiOkResponse({
    status: 200,
    description: 'Read user',
    type: () => ReadUserDTO,
  })
  @Get('/:id')
  async getUserByUserId(@Param() param: ParamUserIdDTO): Promise<ReadUserDTO> {
    return this.userService.getUserById(param.id);
  }
}
