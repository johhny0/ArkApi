import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Weapon } from './entities/weapon.entity';

@Injectable()
export class WeaponsService {
  constructor(
    @Inject('WEAPON_REPOSITORY')
    private readonly repository: Repository<Weapon>,
  ) {}

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} weapon`;
  }

  remove(id: number) {
    return `This action removes a #${id} weapon`;
  }
}
