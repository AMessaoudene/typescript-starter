import { Test, TestingModule } from '@nestjs/testing';
import { CompanytypeService } from './companytype.service';

describe('CompanytypeService', () => {
  let service: CompanytypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanytypeService],
    }).compile();

    service = module.get<CompanytypeService>(CompanytypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
