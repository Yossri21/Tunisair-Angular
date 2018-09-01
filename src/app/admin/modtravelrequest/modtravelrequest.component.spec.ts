import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModtravelrequestComponent } from './modtravelrequest.component';

describe('ModtravelrequestComponent', () => {
  let component: ModtravelrequestComponent;
  let fixture: ComponentFixture<ModtravelrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModtravelrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModtravelrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
