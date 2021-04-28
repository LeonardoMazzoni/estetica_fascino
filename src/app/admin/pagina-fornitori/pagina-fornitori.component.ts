import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import { DialogoEliminaFornitori, DialogoInserimentoFornitori, DialogoModificaFornitori } from './dialoghi-fornitori';

export interface Fornitore {
  id_fornitore: number;
  nome: string;
  telefono: string;
  email: string;
  iban: string;
}

const ELEMENT_DATA: Fornitore[] = [
  {id_fornitore: 1, nome: 'nome', telefono: 'telefono ', email: 'email', iban: 'iban'},
  {id_fornitore: 2, nome: 'nome', telefono: 'telefono ', email: 'email', iban: 'iban'},
  {id_fornitore: 3, nome: 'nome', telefono: 'telefono ', email: 'email', iban: 'iban'},
];


@Component({
  selector: 'app-pagina-fornitori',
  templateUrl: './pagina-fornitori.component.html',
  styleUrls: ['../admin.component.css']
})
export class PaginaFornitoriComponent {

  //variabile che contiene le colonne della tabella che vogliamo mostrare 
  displayedColumns: string[] = ['nome', 'telefono', 'email', 'iban', 'azioni'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(public dialog: MatDialog) {}

  //funzione per filtrare il cliente cercato
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //funzione che apre il dialogo per inserire il nuovo cliente
  openDialogInserimento(): void {
    const dialogRef = this.dialog.open(DialogoInserimentoFornitori);
  }

  //funzione che apre il dialogo per modificare un cliente
  openDialogModifica(): void {
    const dialogRef = this.dialog.open(DialogoModificaFornitori);
  }

  //funzione che apre il dialogo per confermare l'eliminazione del cliente
  openDialogElimina(): void {
    const dialogRef = this.dialog.open(DialogoEliminaFornitori);
  }

}
