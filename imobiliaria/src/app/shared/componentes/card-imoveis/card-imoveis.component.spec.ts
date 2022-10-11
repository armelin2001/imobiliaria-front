import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardImoveisComponent } from './card-imoveis.component';

describe('CardImoveisComponent', () => {
  let component: CardImoveisComponent;
  let fixture: ComponentFixture<CardImoveisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardImoveisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardImoveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
