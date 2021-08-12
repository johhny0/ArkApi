import { Module } from '@nestjs/common';
import { DinosService } from './dinos.service';
import { DinosController } from './dinos.controller';
import { dinosProviders } from './dinos.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [DinosController],
  providers: [...dinosProviders, DinosService]
})
export class DinosModule {}
