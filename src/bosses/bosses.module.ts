import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { BossesController } from './bosses.controller';
import { bossesProviders } from './bosses.providers';
import { BossesService } from './bosses.service';

@Module({
  imports: [DatabaseModule],
  providers: [...bossesProviders, BossesService],
  controllers: [BossesController],
})
export class BossesModule {}
