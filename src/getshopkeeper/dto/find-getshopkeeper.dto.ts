import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateGetshopkeeperDto } from './create-getshopkeeper.dto';

export class findGetshopkeeperDto extends PartialType(CreateGetshopkeeperDto) {
  @ApiProperty({
    description: '用户名',
  })
  readonly username;

  @ApiProperty({
    description: '粉丝',
  })
  readonly fans;

  @ApiProperty({
    description: '店名',
  })
  readonly shop;

  @ApiProperty({
    description: '购买人数',
  })
  readonly shopper;
}
