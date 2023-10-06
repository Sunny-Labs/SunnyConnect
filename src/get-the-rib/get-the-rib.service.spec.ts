import { Test, TestingModule } from '@nestjs/testing';
import { GetTheRibService } from './get-the-rib.service';

describe('GetTheRibService', () => {
  let service: GetTheRibService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetTheRibService],
    }).compile();

    service = module.get<GetTheRibService>(GetTheRibService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
