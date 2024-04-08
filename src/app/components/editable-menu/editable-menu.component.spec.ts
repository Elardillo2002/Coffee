import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableMenuComponent } from './editable-menu.component';

describe('EditableMenuComponent', () => {
  let component: EditableMenuComponent;
  let fixture: ComponentFixture<EditableMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditableMenuComponent]
    });
    fixture = TestBed.createComponent(EditableMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
