import { Test, TestingModule } from '@nestjs/testing';
import { SuscriptoresController } from './suscriptores.controller';

describe('SuscriptoresController', () => {
  let controller: SuscriptoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuscriptoresController],
    }).compile();

    controller = module.get<SuscriptoresController>(SuscriptoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
