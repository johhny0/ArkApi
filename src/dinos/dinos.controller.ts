import { Controller, Get, Param, Delete } from '@nestjs/common';
import { DinosService } from './dinos.service';

@Controller('dinos')
export class DinosController {
  constructor(private readonly dinosService: DinosService) {}

  @Get()
  async findAll() {
    return await this.dinosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dinosService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dinosService.remove(+id);
  }
}
