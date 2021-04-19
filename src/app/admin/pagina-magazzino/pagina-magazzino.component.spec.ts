import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaMagazzinoComponent } from './pagina-magazzino.component';

describe('PaginaMagazzinoComponent', () => {
  let component: PaginaMagazzinoComponent;
  let fixture: ComponentFixture<PaginaMagazzinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaMagazzinoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaMagazzinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
