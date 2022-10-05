import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlliesAnbdOrganisationsComponent } from './allies-anbd-organisations.component';

describe('AlliesAnbdOrganisationsComponent', () => {
  let component: AlliesAnbdOrganisationsComponent;
  let fixture: ComponentFixture<AlliesAnbdOrganisationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlliesAnbdOrganisationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlliesAnbdOrganisationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
