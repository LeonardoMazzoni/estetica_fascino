import { Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import { DialogoInserimentoTrattamenti } from './dialoghi-trattamenti';
import { DialogoEliminaTrattamenti } from './dialoghi-trattamenti';
import { DialogoModificaTrattamenti } from './dialoghi-trattamenti';

export interface Trattamento {
  id_trattamento: number;
  nome: string;
  durata: number;
  descrizione: string;
}

const ELEMENT_DATA: Trattamento[] = [
  {id_trattamento: 1, nome: 'nome',durata: 15, descrizione: 'Descrizione trattamento'},
  {id_trattamento: 2, nome: 'nome',durata: 30, descrizione: 'Descrizione trattamento'},
  {id_trattamento: 3, nome: 'nome',durata: 45, descrizione: 'Descrizione trattamento'},
];

@Component({
  selector: 'app-pagina-trattamenti',
  templateUrl: './pagina-trattamenti.component.html',
  styleUrls: ['../admin.component.css']
})
export class PaginaTrattamentiComponent {

  //variabile che contiene le colonne della tabella che vogliamo mostrare 
  displayedColumns: string[] = ['nome','durata', 'descrizione','azioni'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(public dialog: MatDialog) {}

  //funzione per filtrare il cliente cercato
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //funzione che apre il dialogo per inserire il nuovo cliente
  openDialogInserimento(): void {
    const dialogRef = this.dialog.open(DialogoInserimentoTrattamenti);
  }

  //funzione che apre il dialogo per modificare un cliente
  openDialogModifica(): void {
    const dialogRef = this.dialog.open(DialogoModificaTrattamenti);
  }

  //funzione che apre il dialogo per confermare l'eliminazione del cliente
  openDialogElimina(): void {
    const dialogRef = this.dialog.open(DialogoEliminaTrattamenti);
  }
}
