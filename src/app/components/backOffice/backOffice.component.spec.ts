import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BackOfficeComponent } from './backOffice.component';

describe('BackofficeComponent', () => {
  let component: BackOfficeComponent;
  let fixture: ComponentFixture<BackOfficeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackOfficeComponent]
    });
    fixture = TestBed.createComponent(BackOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
