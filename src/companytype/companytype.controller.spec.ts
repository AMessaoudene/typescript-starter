import { Test, TestingModule } from '@nestjs/testing';
import { CompanytypeController } from './companytype.controller';

describe('CompanytypeController', () => {
  let controller: CompanytypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompanytypeController],
    }).compile();

    controller = module.get<CompanytypeController>(CompanytypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
