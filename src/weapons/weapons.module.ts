import { Module } from '@nestjs/common';
import { WeaponsService } from './weapons.service';
import { WeaponsController } from './weapons.controller';
import { weaponsProviders } from './weapons.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [WeaponsController],
  providers: [...weaponsProviders, WeaponsService],
})
export class WeaponsModule {}
