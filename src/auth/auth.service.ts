import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { authLoginDto } from './dto/auth-login.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(User)
    private userService: Repository<User>,
  ) {}

  async getUser(user) {
    const username = user.username;

    const abc = await this.userService.findOne({
      where: { username },
    });

    return abc;
  }

  createToken(user: Partial<User>) {
    return this.jwtService.sign(user);
  }
  async login(user: Partial<User>) {
    const token = await this.createToken({
      id: user.id,
      username: user.username,
    });
    const username = user.username;
    return { token, username };
  }
}
