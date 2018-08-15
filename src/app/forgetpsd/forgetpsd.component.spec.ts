import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetpsdComponent } from './forgetpsd.component';

describe('ForgetpsdComponent', () => {
  let component: ForgetpsdComponent;
  let fixture: ComponentFixture<ForgetpsdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetpsdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetpsdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
