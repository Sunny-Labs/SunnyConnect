import { Test, TestingModule } from '@nestjs/testing';
import { GetTheRibController } from './get-the-rib.controller';

describe('GetTheRibController', () => {
  let controller: GetTheRibController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetTheRibController],
    }).compile();

    controller = module.get<GetTheRibController>(GetTheRibController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
