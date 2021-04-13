import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialogRef} from '@angular/material/dialog';

export interface Cliente {
  id_cliente: number;
  nome: string;
  cognome: string;
  telefono: string;
  email: string;
  data_nascita: Date;
}

const ELEMENT_DATA: Cliente[] = [
  {id_cliente: 1, nome: 'esempio nome', cognome: 'esempio cognome', telefono: '3333333', email: 'esempio@email', data_nascita: new Date("2019-01-16")},
  {id_cliente: 2, nome: 'esempio nome', cognome: 'esempio cognome', telefono: '3333333', email: 'esempio@email', data_nascita: new Date("2019-01-16")},
  {id_cliente: 3, nome: 'esempio nome', cognome: 'esempio cognome', telefono: '3333333', email: 'esempio@email', data_nascita: new Date("2019-01-16")},
  {id_cliente: 4, nome: 'esempio nome', cognome: 'esempio cognome', telefono: '3333333', email: 'esempio@email', data_nascita: new Date("2019-01-16")},
  {id_cliente: 5, nome: 'esempio nome', cognome: 'esempio cognome', telefono: '3333333', email: 'esempio@email', data_nascita: new Date("2019-01-16")},
  {id_cliente: 6, nome: 'esempio nome', cognome: 'esempio cognome', telefono: '3333333', email: 'esempio@email', data_nascita: new Date("2019-01-16")},
  {id_cliente: 7, nome: 'esempio nome', cognome: 'esempio cognome', telefono: '3333333', email: 'esempio@email', data_nascita: new Date("2019-01-16")},
  {id_cliente: 8, nome: 'esempio nome', cognome: 'esempio cognome', telefono: '3333333', email: 'esempio@email', data_nascita: new Date("2019-01-16")},
  {id_cliente: 9, nome: 'esempio nome', cognome: 'esempio cognome', telefono: '3333333', email: 'esempio@email', data_nascita: new Date("2019-01-16")},
  {id_cliente: 10, nome: 'esempio nome', cognome: 'esempio cognome', telefono: '3333333', email: 'esempio@email', data_nascita: new Date("2019-01-16")},
  {id_cliente: 11, nome: 'esempio nome', cognome: 'esempio cognome', telefono: '3333333', email: 'esempio@email', data_nascita: new Date("2019-01-16")},
  {id_cliente: 12, nome: 'esempio nome', cognome: 'esempio cognome', telefono: '3333333', email: 'esempio@email', data_nascita: new Date("2019-01-16")},
  {id_cliente: 13, nome: 'esempio nome', cognome: 'esempio cognome', telefono: '3333333', email: 'esempio@email', data_nascita: new Date("2019-01-16")},
  {id_cliente: 14, nome: 'esempio nome', cognome: 'esempio cognome', telefono: '3333333', email: 'esempio@email', data_nascita: new Date("2019-01-16")},
  {id_cliente: 15, nome: 'esempio nome', cognome: 'esempio cognome', telefono: '3333333', email: 'esempio@email', data_nascita: new Date("2019-01-16")},
  {id_cliente: 16, nome: 'esempio nome', cognome: 'esempio cognome', telefono: '3333333', email: 'esempio@email', data_nascita: new Date("2019-01-16")},
];


@Component({
  selector: 'app-pagina-clienti',
  templateUrl: './pagina-clienti.component.html',
  styleUrls: ['./pagina-clienti.component.css']
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

  openDialogInserimento(): void {
    const dialogRef = this.dialog.open(DialogoInserimentoClienti, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}


@Component({
  selector: 'dialogo-inserimento-clienti',
  templateUrl: 'dialogo-inserimento-clienti.html',
})
export class DialogoInserimentoClienti {

  constructor(
    public dialogRef: MatDialogRef<DialogoInserimentoClienti>
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}