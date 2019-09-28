import { TestBed } from '@angular/core/testing';
import { HomeContainerService } from './home-container.service';

describe('HomeContainerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeContainerService = TestBed.get(HomeContainerService);
    expect(service).toBeTruthy();
  });
});
