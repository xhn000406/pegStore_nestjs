import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { createQueryBuilder, Repository } from 'typeorm';
import { CreateGetshopkeeperDto } from './dto/create-getshopkeeper.dto';
import { UpdateGetshopkeeperDto } from './dto/update-getshopkeeper.dto';

@Injectable()
export class GetshopkeeperService {
  constructor(
    @InjectRepository(User)
    private readonly shopkeeperRepository: Repository<User>,
  ) {}

  async findAll(query) {
    const { currentPage = 1, pageSize = 10 } = query;

    const qb = await this.shopkeeperRepository
      .createQueryBuilder('user')
      .skip((currentPage - 1) * pageSize)
      .take(pageSize);

    const count = await qb.getCount();

    const result = await qb.getMany();

    return {
      count,
      result,
    };
  }

  async findSome(id: number, updateGetshopkeeperDto: UpdateGetshopkeeperDto) {
    const { username } = updateGetshopkeeperDto;

    const qb = await this.shopkeeperRepository
      .createQueryBuilder('user')
      .where('username like :username', {
        username: '%' + username + '%',
      })
      .skip(0)
      .take(10);

    const count = await qb.getCount();

    const result = await qb.getMany();
    return {
      count,
      result,
    };
  }

  async update(id: number, updateGetshopkeeperDto: UpdateGetshopkeeperDto) {
    const reSet = await this.shopkeeperRepository.update(
      id,
      updateGetshopkeeperDto,
    );
    return reSet;
  }

  async remove(id: number) {
    return await this.shopkeeperRepository
      .createQueryBuilder()
      .delete()
      .from('user')
      .where('user.id = :id', { id })
      .execute();
  }
}
