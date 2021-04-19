import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPrenotazioniComponent } from './pagina-prenotazioni.component';

describe('PaginaPrenotazioniComponent', () => {
  let component: PaginaPrenotazioniComponent;
  let fixture: ComponentFixture<PaginaPrenotazioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaPrenotazioniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaPrenotazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
