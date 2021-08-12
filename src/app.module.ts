import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BossesModule } from './bosses/bosses.module';

@Module({
  imports: [BossesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
