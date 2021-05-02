import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {DialogoInserimentoClienti} from './dialoghi-clienti';
import {DialogoEliminaClienti} from './dialoghi-clienti';
import {DialogoModificaClienti} from './dialoghi-clienti';

export interface Cliente {
  id_cliente: number;
  nome: string;
  cognome: string;
  telefono: string;
  email: string;
  data_nascita: Date
;
}

let ELEMENT_DATA: Cliente[] = [
  {id_cliente: 1, nome: 'esempio nome', cognome: 'esempio cognome', telefono: '3333333', email: 'esempio@email', data_nascita: new Date("2019-01-16")},
  {id_cliente: 2, nome: 'esempio nome', cognome: 'esempio cognome', telefono: '3333333', email: 'esempio@email', data_nascita: new Date("2019-01-16")},
  {id_cliente: 3, nome: 'esempio nome', cognome: 'esempio cognome', telefono: '3333333', email: 'esempio@email', data_nascita: new Date("2019-01-16")},
  {id_cliente: 3, nome: 'esempio nome', cognome: 'esempio cognome', telefono: '3333333', email: 'esempio@email', data_nascita: new Date("2019-01-16")},
  {id_cliente: 3, nome: 'esempio nome', cognome: 'esempio cognome', telefono: '3333333', email: 'esempio@email', data_nascita: new Date("2019-01-16")},
  {id_cliente: 3, nome: 'esempio nome', cognome: 'esempio cognome', telefono: '3333333', email: 'esempio@email', data_nascita: new Date("2019-01-16")},
  {id_cliente: 3, nome: 'esempio nome', cognome: 'esempio cognome', telefono: '3333333', email: 'esempio@email', data_nascita: new Date("2019-01-16")},
  {id_cliente: 3, nome: 'esempio nome', cognome: 'esempio cognome', telefono: '3333333', email: 'esempio@email', data_nascita: new Date("2019-01-16")},
  {id_cliente: 3, nome: 'esempio nome', cognome: 'esempio cognome', telefono: '3333333', email: 'esempio@email', data_nascita: new Date("2019-01-16")},
  {id_cliente: 3, nome: 'esempio nome', cognome: 'esempio cognome', telefono: '3333333', email: 'esempio@email', data_nascita: new Date("2019-01-16")},
  {id_cliente: 3, nome: 'esempio nome', cognome: 'esempio cognome', telefono: '3333333', email: 'esempio@email', data_nascita: new Date("2019-01-16")},
];

@Component({
  selector: 'app-pagina-clienti',
  templateUrl: './pagina-clienti.component.html',
  styleUrls: ['../admin.component.css']
})
export class PaginaClientiComponent {
  //variabile che contiene le colonne della tabella che vogliamo mostrare 
  displayedColumns: string[] = ['nome', 'cognome', 'telefono', 'email', 'data_nascita', 'azioni'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(public dialog: MatDialog) {}

  //funzione per filtrare il cliente cercato
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //funzione che apre il dialogo per inserire il nuovo cliente
  openDialogInserimento(): void {
    const dialogRef = this.dialog.open(DialogoInserimentoClienti);
  }

  //funzione che apre il dialogo per modificare un cliente
  openDialogModifica(): void {
    const dialogRef = this.dialog.open(DialogoModificaClienti);
  }

  //funzione che apre il dialogo per confermare l'eliminazione del cliente
  openDialogElimina(): void {
    const dialogRef = this.dialog.open(DialogoEliminaClienti);
  }
}