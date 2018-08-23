import { TestBed, inject } from '@angular/core/testing';

import { ClientReqService } from './client-req.service';

describe('ClientReqService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientReqService]
    });
  });

  it('should be created', inject([ClientReqService], (service: ClientReqService) => {
    expect(service).toBeTruthy();
  }));
});
