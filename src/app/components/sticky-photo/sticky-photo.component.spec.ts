import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyPhotoComponent } from './sticky-photo.component';

describe('StickyPhotoComponent', () => {
  let component: StickyPhotoComponent;
  let fixture: ComponentFixture<StickyPhotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StickyPhotoComponent]
    });
    fixture = TestBed.createComponent(StickyPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
