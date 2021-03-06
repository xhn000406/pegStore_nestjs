import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { GetshopkeeperModule } from './getshopkeeper/getshopkeeper.module';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot(),
    AuthModule,
    GetshopkeeperModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
