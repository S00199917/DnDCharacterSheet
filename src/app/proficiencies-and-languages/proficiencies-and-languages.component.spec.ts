import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProficienciesAndLanguagesComponent } from './proficiencies-and-languages.component';

describe('ProficienciesAndLanguagesComponent', () => {
  let component: ProficienciesAndLanguagesComponent;
  let fixture: ComponentFixture<ProficienciesAndLanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProficienciesAndLanguagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProficienciesAndLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
