import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BossesModule } from './bosses/bosses.module';
import { ArmorsModule } from './armors/armors.module';
import { WeaponsModule } from './weapons/weapons.module';
import { DinosModule } from './dinos/dinos.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    BossesModule,
    ArmorsModule,
    WeaponsModule,
    DinosModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
