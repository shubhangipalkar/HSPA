import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellPropComponent } from './sell-prop.component';

describe('SellPropComponent', () => {
  let component: SellPropComponent;
  let fixture: ComponentFixture<SellPropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellPropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellPropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
