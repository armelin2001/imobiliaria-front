import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriaCorretorComponent } from './cria-corretor.component';

describe('CriaCorretorComponent', () => {
  let component: CriaCorretorComponent;
  let fixture: ComponentFixture<CriaCorretorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriaCorretorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriaCorretorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
