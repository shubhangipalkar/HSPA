import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyPropComponent } from './buy-prop.component';

describe('BuyPropComponent', () => {
  let component: BuyPropComponent;
  let fixture: ComponentFixture<BuyPropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyPropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyPropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
