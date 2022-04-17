import { Module } from '@nestjs/common';
import { GetshopkeeperService } from './getshopkeeper.service';
import { GetshopkeeperController } from './getshopkeeper.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { jwtStrategy } from 'src/auth/jwt.strategy';
import { AuthService } from 'src/auth/auth.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [GetshopkeeperController],
  providers: [GetshopkeeperService],
})
export class GetshopkeeperModule {}
