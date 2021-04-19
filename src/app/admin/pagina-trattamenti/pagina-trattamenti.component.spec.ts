import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaTrattamentiComponent } from './pagina-trattamenti.component';

describe('PaginaTrattamentiComponent', () => {
  let component: PaginaTrattamentiComponent;
  let fixture: ComponentFixture<PaginaTrattamentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaTrattamentiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaTrattamentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
