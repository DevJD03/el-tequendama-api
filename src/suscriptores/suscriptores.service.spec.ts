import { Test, TestingModule } from '@nestjs/testing';
import { SuscriptoresService } from './suscriptores.service';

describe('SuscriptoresService', () => {
  let service: SuscriptoresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuscriptoresService],
    }).compile();

    service = module.get<SuscriptoresService>(SuscriptoresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
