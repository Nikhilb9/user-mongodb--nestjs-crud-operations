import { ApiProperty } from '@nestjs/swagger';
import { ReadUserList } from '../interface/user.interface';
import { ReadUserDTO } from './read-user.dto';

export class ReadUserListDTO implements ReadUserList {
  @ApiProperty({ description: 'User lists', type: () => [ReadUserDTO] })
  items: ReadUserDTO[];
}
