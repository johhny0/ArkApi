import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Boss } from './boss.entity';

@Injectable()
export class BossService {
  constructor(
    @Inject('BOSS_REPOSITORY')
    private bossRepository: Repository<Boss>,
  ) {}

  async findAll(): Promise<Boss[]> {
    return this.bossRepository.find();
  }
}
