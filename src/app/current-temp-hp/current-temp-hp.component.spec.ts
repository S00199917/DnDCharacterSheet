import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTempHpComponent } from './current-temp-hp.component';

describe('CurrentTempHpComponent', () => {
  let component: CurrentTempHpComponent;
  let fixture: ComponentFixture<CurrentTempHpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentTempHpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentTempHpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
