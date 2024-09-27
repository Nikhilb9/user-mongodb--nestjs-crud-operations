import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsOptional,
  IsPositive,
  IsString,
  IsUrl,
} from 'class-validator';
import { UpdateUser } from '../interface/user.interface';

export class UpdateUserDTO implements UpdateUser {
  @ApiProperty({ description: 'User name', required: false })
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty({ description: 'User image', required: false })
  @IsString()
  @IsOptional()
  @IsUrl()
  userImage: string;

  @ApiProperty({ description: 'User age', required: false })
  @IsInt()
  @IsOptional()
  @IsPositive()
  age: number;

  @ApiProperty({ description: 'User salary', required: false })
  @IsInt()
  @IsOptional()
  @IsPositive()
  salary: number;
}
