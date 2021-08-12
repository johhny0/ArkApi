import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BossesModule } from './bosses/bosses.module';
import { ArmorsModule } from './armors/armors.module';
import { WeaponsModule } from './weapons/weapons.module';

@Module({
  imports: [BossesModule, ArmorsModule, WeaponsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
