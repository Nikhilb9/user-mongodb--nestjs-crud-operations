import { IsMongoId, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ParamUserIdDTO {
  @ApiProperty({ description: 'User id', required: true })
  @IsString()
  @IsMongoId({ each: true })
  id: string;
}
