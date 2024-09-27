import { ApiProperty } from '@nestjs/swagger';
import { SuccessResponseMessage } from '../interface/user.interface';

export class SuccessResponseMessageDTO implements SuccessResponseMessage {
  @ApiProperty({ description: 'Success response message dto' })
  message: string;
}
