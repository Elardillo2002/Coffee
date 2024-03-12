import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryDescriptionComponent } from './secondary-description.component';

describe('SecondaryDescriptionComponent', () => {
  let component: SecondaryDescriptionComponent;
  let fixture: ComponentFixture<SecondaryDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondaryDescriptionComponent]
    });
    fixture = TestBed.createComponent(SecondaryDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
