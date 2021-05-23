import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

export interface Prenotazione {
  id: number;
  data: string[];
  ora: string[];
  trattamento: string;
  cliente: string;
}

@Component({
  selector: 'app-pagina-prenotazioni',
  templateUrl: './pagina-prenotazioni.component.html',
  styleUrls: ['../admin.component.css']
})
export class PaginaPrenotazioniComponent implements OnInit {

  //variabile che contiene le colonne della tabella che vogliamo mostrare 
  displayedColumns: string[] = ['cliente', 'trattamento', 'data', 'ora', 'azioni'];
  data: any;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  //funzione per filtrare il cliente cercato
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.data.filter = filterValue.trim().toLowerCase();
  }

  /* //funzione che apre il dialogo per inserire il nuovo cliente
  openDialogInserimento(): void {
    const dialogRef = this.dialog.open(DialogoInserimentoPrenotazioni);
  }

  //funzione che apre il dialogo per modificare un cliente
  openDialogModifica(): void {
    const dialogRef = this.dialog.open(DialogoModificaPrenotazioni);
  } */
}
