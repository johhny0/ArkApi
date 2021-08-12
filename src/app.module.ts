import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BossesModule } from './bosses/bosses.module';
import { ArmorsModule } from './armors/armors.module';

@Module({
  imports: [BossesModule, ArmorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
