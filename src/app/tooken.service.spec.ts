import { TestBed, inject } from '@angular/core/testing';

import { TookenService } from './tooken.service';

describe('TookenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TookenService]
    });
  });

  it('should be created', inject([TookenService], (service: TookenService) => {
    expect(service).toBeTruthy();
  }));
});
