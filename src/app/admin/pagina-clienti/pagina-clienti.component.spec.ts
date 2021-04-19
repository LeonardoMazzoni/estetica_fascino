import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaClientiComponent } from './pagina-clienti.component';

describe('PaginaClientiComponent', () => {
  let component: PaginaClientiComponent;
  let fixture: ComponentFixture<PaginaClientiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaClientiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaClientiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
