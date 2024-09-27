import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsString, IsUrl } from 'class-validator';
import { CreateUser } from '../interface/user.interface';

export class CreateUserDTO implements CreateUser {
  @ApiProperty({ description: 'User name', required: true })
  @IsString()
  name!: string;

  @ApiProperty({ description: 'User image', required: true })
  @IsString()
  @IsUrl()
  userImage!: string;

  @ApiProperty({ description: 'User age', required: true })
  @IsInt()
  @IsPositive()
  age!: number;

  @ApiProperty({ description: 'User salary', required: true })
  @IsInt()
  @IsPositive()
  salary!: number;
}
