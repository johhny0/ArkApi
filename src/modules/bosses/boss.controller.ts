import { Controller, Get } from '@nestjs/common';
import { BossService } from './boss.service';

@Controller('/bosses')
export class BossController {
  constructor(private readonly bossService: BossService) {}

  @Get('/')
  getBosses(): any {
    return this.bossService.findAll();
  }
}
