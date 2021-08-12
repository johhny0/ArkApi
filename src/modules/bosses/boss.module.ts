import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { BossController } from './boss.controller';
import { bossProviders } from './boss.providers';
import { BossService } from './boss.service';

@Module({
  imports: [DatabaseModule],
  providers: [...bossProviders, BossService],
  controllers: [BossController],
})
export class BossModule {}
