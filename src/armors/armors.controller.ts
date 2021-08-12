import { Controller, Get, Param, Delete } from '@nestjs/common';
import { ArmorsService } from './armors.service';

@Controller('armors')
export class ArmorsController {
  constructor(private readonly armorsService: ArmorsService) {}

  @Get()
  findAll() {
    return this.armorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.armorsService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.armorsService.remove(+id);
  }
}
