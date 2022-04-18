import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { GetshopkeeperService } from './getshopkeeper.service';
import { CreateGetshopkeeperDto } from './dto/create-getshopkeeper.dto';
import { UpdateGetshopkeeperDto } from './dto/update-getshopkeeper.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { findGetshopkeeperDto } from './dto/find-getshopkeeper.dto';
import { query } from 'express';

@ApiTags('商家信息')
@Controller('system/getshopkeeper')
export class GetshopkeeperController {
  constructor(private readonly getshopkeeperService: GetshopkeeperService) {}

  // @Post()
  // create(@Body() CreateGetshopkeeperDto: CreateGetshopkeeperDto) {
  //   return this.getshopkeeperService.create(CreateGetshopkeeperDto);
  // }

  @Get()
  @ApiBearerAuth()
  @ApiOperation({ summary: '获取全部商家' })
  @UseGuards(AuthGuard('jwt'))
  findAll(@Query() query) {
    return this.getshopkeeperService.findAll(query);
  }

  @Post()
  @ApiBearerAuth()
  @ApiOperation({ summary: '查询部分商城' })
  @UseGuards(AuthGuard('jwt'))
  findOne(
    @Param('id') id: string,
    @Body() findGetshopkeeperDto: findGetshopkeeperDto,
  ) {
    return this.getshopkeeperService.findSome(+id, findGetshopkeeperDto);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @ApiOperation({ summary: '更新店主信息' })
  @UseGuards(AuthGuard('jwt'))
  update(
    @Param('id') id: string,
    @Body() updateGetshopkeeperDto: UpdateGetshopkeeperDto,
  ) {
    return this.getshopkeeperService.update(+id, updateGetshopkeeperDto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @ApiOperation({ summary: '删除店主信息' })
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.getshopkeeperService.remove(+id);
  }
}
