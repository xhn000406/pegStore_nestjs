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
  create(createGetshopkeeperDto: CreateGetshopkeeperDto) {
    return 'This action adds a new getshopkeeper';
  }

  async findAll() {
    const result = await this.shopkeeperRepository
      .createQueryBuilder('user')
      .getMany();
  
    return result;
  }

  findOne(id: number) {
    return `This action returns a #${id} getshopkeeper`;
  }

  update(id: number, updateGetshopkeeperDto: UpdateGetshopkeeperDto) {
    return `This action updates a #${id} getshopkeeper`;
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
