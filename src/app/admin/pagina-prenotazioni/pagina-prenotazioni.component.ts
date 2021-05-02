import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {DialogoInserimentoPrenotazioni} from './dialoghi-prenotazioni';
import {DialogoEliminaPrenotazioni} from './dialoghi-prenotazioni';
import {DialogoModificaPrenotazioni} from './dialoghi-prenotazioni';

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
  styleUrls: ['../admin.component.css']
})
export class PaginaPrenotazioniComponent implements OnInit {

  //variabile che contiene le colonne della tabella che vogliamo mostrare 
  displayedColumns: string[] = ['cliente', 'trattamento', 'data_prenotazione', 'ora', 'durata', 'azioni'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  //funzione per filtrare il cliente cercato
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //funzione che apre il dialogo per inserire il nuovo cliente
  openDialogInserimento(): void {
    const dialogRef = this.dialog.open(DialogoInserimentoPrenotazioni);
  }

  //funzione che apre il dialogo per modificare un cliente
  openDialogModifica(): void {
    const dialogRef = this.dialog.open(DialogoEliminaPrenotazioni);
  }

  //funzione che apre il dialogo per confermare l'eliminazione del cliente
  openDialogElimina(): void {
    const dialogRef = this.dialog.open(DialogoModificaPrenotazioni);
  }
}
