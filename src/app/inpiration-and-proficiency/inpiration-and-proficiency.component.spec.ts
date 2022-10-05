import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InpirationAndProficiencyComponent } from './inpiration-and-proficiency.component';

describe('InpirationAndProficiencyComponent', () => {
  let component: InpirationAndProficiencyComponent;
  let fixture: ComponentFixture<InpirationAndProficiencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InpirationAndProficiencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InpirationAndProficiencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
