import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BgproductsComponent } from './bgproducts.component';

describe('BgproductsComponent', () => {
  let component: BgproductsComponent;
  let fixture: ComponentFixture<BgproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BgproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BgproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
