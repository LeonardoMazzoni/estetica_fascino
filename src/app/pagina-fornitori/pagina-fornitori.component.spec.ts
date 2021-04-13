import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaFornitoriComponent } from './pagina-fornitori.component';

describe('PaginaFornitoriComponent', () => {
  let component: PaginaFornitoriComponent;
  let fixture: ComponentFixture<PaginaFornitoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaFornitoriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaFornitoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
