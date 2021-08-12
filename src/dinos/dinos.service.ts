import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Dino } from './entities/dino.entity';

@Injectable()
export class DinosService {
  constructor(
    @Inject('DINO_REPOSITORY')
    private repository: Repository<Dino>,
  ) {}

  async findAll(): Promise<Dino[]> {
    return await this.repository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} dino`;
  }

  remove(id: number) {
    return `This action removes a #${id} dino`;
  }
}
