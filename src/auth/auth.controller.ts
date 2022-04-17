import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger/dist';
import { AuthService } from './auth.service';
import { authLoginDto } from './dto/auth-login.dto';

@ApiTags('用户信息')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: '登陆' })
  @UseGuards(AuthGuard('local'))
  async login(@Body() user: authLoginDto, @Req() req) {
    console.log(user);

    return await this.authService.login(user);
  }

  @Get('getshopkeeper')
  @ApiOperation({ summary: '获取用户信息' })
  @ApiBearerAuth() // swagger文档设置token
  @UseGuards(AuthGuard('jwt'))
  getshopkeeper(@Req() req) {
    return this.authService.getShopkeeper();
  }
}
