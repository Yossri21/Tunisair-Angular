import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacePartenaireComponent } from './espace-partenaire.component';

describe('EspacePartenaireComponent', () => {
  let component: EspacePartenaireComponent;
  let fixture: ComponentFixture<EspacePartenaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspacePartenaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspacePartenaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
