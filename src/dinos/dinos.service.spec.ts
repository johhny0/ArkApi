import { Test, TestingModule } from '@nestjs/testing';
import { DinosService } from './dinos.service';

describe('DinosService', () => {
  let service: DinosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DinosService],
    }).compile();

    service = module.get<DinosService>(DinosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
