import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeCardComponent } from './coffee-card.component';

describe('CoffeeCardComponent', () => {
  let component: CoffeeCardComponent;
  let fixture: ComponentFixture<CoffeeCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoffeeCardComponent]
    });
    fixture = TestBed.createComponent(CoffeeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
