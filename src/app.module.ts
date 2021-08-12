import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BossModule } from './modules/bosses/boss.module';

@Module({
  imports: [BossModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
