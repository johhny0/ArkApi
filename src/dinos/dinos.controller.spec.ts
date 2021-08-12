import { Test, TestingModule } from '@nestjs/testing';
import { DinosController } from './dinos.controller';
import { DinosService } from './dinos.service';

describe('DinosController', () => {
  let controller: DinosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DinosController],
      providers: [DinosService],
    }).compile();

    controller = module.get<DinosController>(DinosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
