import { Module } from '@nestjs/common';
import { ArmorsService } from './armors.service';
import { ArmorsController } from './armors.controller';
import { armorsProviders } from './armors.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ArmorsController],
  providers: [...armorsProviders, ArmorsService],
})
export class ArmorsModule {}
