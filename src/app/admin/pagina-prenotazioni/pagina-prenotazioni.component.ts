import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';

export interface Prenotazione {
  id_prenotazione: number;
  data: Date;
  ora: Time;
  durata: number;
  id_trattamento: number;
  id_cliente: number;
}

@Component({
  selector: 'app-pagina-prenotazioni',
  templateUrl: './pagina-prenotazioni.component.html',
  styleUrls: ['./pagina-prenotazioni.component.css']
})
export class PaginaPrenotazioniComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
