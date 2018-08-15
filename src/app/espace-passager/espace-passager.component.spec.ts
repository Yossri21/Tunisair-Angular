import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacePassagerComponent } from './espace-passager.component';

describe('EspacePassagerComponent', () => {
  let component: EspacePassagerComponent;
  let fixture: ComponentFixture<EspacePassagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspacePassagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspacePassagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
