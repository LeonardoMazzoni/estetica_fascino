import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface Prenotazione {
  id_prenotazione: number;
  data: Date;
  ora: Time;
  durata: number;
  id_trattamento: number;
  id_cliente: number;
}

const ELEMENT_DATA: Prenotazione[] = [
  
];

@Component({
  selector: 'app-pagina-prenotazioni',
  templateUrl: './pagina-prenotazioni.component.html',
  styleUrls: ['./pagina-prenotazioni.component.css']
})
export class PaginaPrenotazioniComponent implements OnInit {

  //variabile che contiene le colonne della tabella che vogliamo mostrare 
  displayedColumns: string[] = ['cliente', 'trattamento', 'data_prenotazione', 'ora', 'durata', 'azioni'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }

  //funzione per filtrare il cliente cercato
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
