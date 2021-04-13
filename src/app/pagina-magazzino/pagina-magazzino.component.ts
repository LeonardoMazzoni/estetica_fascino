import { Component, OnInit } from '@angular/core';

export interface prodotto {
  codice_prodotto: string;
  nome: string;
  descrizione: string;
  quantita: number;
  prezzo_vendita: number;
  prezzo_acquisto: number;
  id_fornitore: number;
}

@Component({
  selector: 'app-pagina-magazzino',
  templateUrl: './pagina-magazzino.component.html',
  styleUrls: ['./pagina-magazzino.component.css']
})
export class PaginaMagazzinoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
