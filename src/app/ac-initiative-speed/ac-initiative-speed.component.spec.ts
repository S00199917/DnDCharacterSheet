import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcInitiativeSpeedComponent } from './ac-initiative-speed.component';

describe('AcInitiativeSpeedComponent', () => {
  let component: AcInitiativeSpeedComponent;
  let fixture: ComponentFixture<AcInitiativeSpeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcInitiativeSpeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcInitiativeSpeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
