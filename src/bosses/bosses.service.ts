import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Boss } from './entity/bosses.entity';

@Injectable()
export class BossesService {
  constructor(
    @Inject('BOSS_REPOSITORY')
    private repository: Repository<Boss>,
  ) {}

  async findAll(): Promise<Boss[]> {
    return this.repository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} weapon`;
  }

  remove(id: number) {
    return `This action removes a #${id} weapon`;
  }
}
