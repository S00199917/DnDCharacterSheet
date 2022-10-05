import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitsIdealsBondsAndFlawsComponent } from './traits-ideals-bonds-and-flaws.component';

describe('TraitsIdealsBondsAndFlawsComponent', () => {
  let component: TraitsIdealsBondsAndFlawsComponent;
  let fixture: ComponentFixture<TraitsIdealsBondsAndFlawsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraitsIdealsBondsAndFlawsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraitsIdealsBondsAndFlawsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
