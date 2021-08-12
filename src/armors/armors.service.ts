import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Armor } from './entities/armor.entity';

@Injectable()
export class ArmorsService {
  constructor(
    @Inject('ARMOR_REPOSITORY')
    private repository: Repository<Armor>,
  ) {}

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} armor`;
  }

  remove(id: number) {
    return `This action removes a #${id} armor`;
  }
}
