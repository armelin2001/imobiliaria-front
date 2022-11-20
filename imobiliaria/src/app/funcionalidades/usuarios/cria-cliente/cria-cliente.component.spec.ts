import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriaClienteComponent } from './cria-cliente.component';

describe('CriaClienteComponent', () => {
  let component: CriaClienteComponent;
  let fixture: ComponentFixture<CriaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriaClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
