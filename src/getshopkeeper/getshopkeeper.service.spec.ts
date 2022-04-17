import { Test, TestingModule } from '@nestjs/testing';
import { GetshopkeeperService } from './getshopkeeper.service';

describe('GetshopkeeperService', () => {
  let service: GetshopkeeperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetshopkeeperService],
    }).compile();

    service = module.get<GetshopkeeperService>(GetshopkeeperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
