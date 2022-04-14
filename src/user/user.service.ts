import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { username } = createUserDto;

    const exitUser = await this.userRepository.findOne({
      where: { username },
    });

    if (exitUser) {
      throw new HttpException('用户已经被注册', 401);
    }

    const successRgt = await this.userRepository.create(createUserDto);

    return await this.userRepository.save(successRgt);
  }
}
