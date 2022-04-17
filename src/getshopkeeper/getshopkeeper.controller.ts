import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { GetshopkeeperService } from './getshopkeeper.service';
import { CreateGetshopkeeperDto } from './dto/create-getshopkeeper.dto';
import { UpdateGetshopkeeperDto } from './dto/update-getshopkeeper.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('商家信息')
@Controller('system/getshopkeeper')
export class GetshopkeeperController {
  constructor(private readonly getshopkeeperService: GetshopkeeperService) {}

  @Post()
  create(@Body() createGetshopkeeperDto: CreateGetshopkeeperDto) {
    return this.getshopkeeperService.create(createGetshopkeeperDto);
  }

  @Get()
  @ApiBearerAuth()
  @ApiOperation({ summary: '获取全部商家' })
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.getshopkeeperService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.getshopkeeperService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGetshopkeeperDto: UpdateGetshopkeeperDto,
  ) {
    return this.getshopkeeperService.update(+id, updateGetshopkeeperDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.getshopkeeperService.remove(+id);
  }
}
