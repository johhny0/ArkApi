import { Controller, Delete, Get, Param } from '@nestjs/common';
import { BossesService } from './bosses.service';

@Controller('/bosses')
export class BossesController {
  constructor(private readonly service: BossesService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
