import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesAndTraitsComponent } from './features-and-traits.component';

describe('FeaturesAndTraitsComponent', () => {
  let component: FeaturesAndTraitsComponent;
  let fixture: ComponentFixture<FeaturesAndTraitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesAndTraitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesAndTraitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
