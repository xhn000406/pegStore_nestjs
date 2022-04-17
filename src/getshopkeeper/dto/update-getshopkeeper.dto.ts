import { PartialType } from '@nestjs/swagger';
import { CreateGetshopkeeperDto } from './create-getshopkeeper.dto';

export class UpdateGetshopkeeperDto extends PartialType(CreateGetshopkeeperDto) {}
