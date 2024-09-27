import { ApiProperty } from '@nestjs/swagger';
import { ReadUser } from '../interface/user.interface';

export class ReadUserDTO implements ReadUser {
  @ApiProperty({ description: 'User id' })
  userId: string;

  @ApiProperty({ description: 'User name' })
  name: string;

  @ApiProperty({ description: 'User image' })
  userImage: string;

  @ApiProperty({ description: 'User age' })
  age: number;

  @ApiProperty({ description: 'User salary' })
  salary: number;
}
