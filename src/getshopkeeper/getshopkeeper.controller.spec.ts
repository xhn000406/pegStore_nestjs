import { Test, TestingModule } from '@nestjs/testing';
import { GetshopkeeperController } from './getshopkeeper.controller';
import { GetshopkeeperService } from './getshopkeeper.service';

describe('GetshopkeeperController', () => {
  let controller: GetshopkeeperController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetshopkeeperController],
      providers: [GetshopkeeperService],
    }).compile();

    controller = module.get<GetshopkeeperController>(GetshopkeeperController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
