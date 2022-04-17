import { UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, StrategyOptions, Strategy } from 'passport-jwt';

import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { AuthService } from './auth.service';

export class jwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly authService: AuthService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'demo',
    } as StrategyOptions);
  }

  async validate(user: User) {
    const exitsUser = await this.authService.getUser(user);

    if (!exitsUser) {
      throw new UnauthorizedException('token不正确');
    }
    return exitsUser;
  }
}
