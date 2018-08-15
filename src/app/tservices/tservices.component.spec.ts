import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TservicesComponent } from './tservices.component';

describe('TservicesComponent', () => {
  let component: TservicesComponent;
  let fixture: ComponentFixture<TservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
