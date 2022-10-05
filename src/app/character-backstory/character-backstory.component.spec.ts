import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterBackstoryComponent } from './character-backstory.component';

describe('CharacterBackstoryComponent', () => {
  let component: CharacterBackstoryComponent;
  let fixture: ComponentFixture<CharacterBackstoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterBackstoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterBackstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
