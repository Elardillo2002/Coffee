import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsAccessComponent } from './clients-access.component';

describe('ClientsAccessComponent', () => {
  let component: ClientsAccessComponent;
  let fixture: ComponentFixture<ClientsAccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientsAccessComponent]
    });
    fixture = TestBed.createComponent(ClientsAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
