import { Component, OnInit } from '@angular/core';

export interface fornitore {
  id_fornitore: number;
  nome: string;
  telefono: string;
  email: string;
  iban: string;
}

@Component({
  selector: 'app-pagina-fornitori',
  templateUrl: './pagina-fornitori.component.html',
  styleUrls: ['./pagina-fornitori.component.css']
})
export class PaginaFornitoriComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
