import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalFeaturesAndTraitsComponent } from './additional-features-and-traits.component';

describe('AdditionalFeaturesAndTraitsComponent', () => {
  let component: AdditionalFeaturesAndTraitsComponent;
  let fixture: ComponentFixture<AdditionalFeaturesAndTraitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalFeaturesAndTraitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalFeaturesAndTraitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
