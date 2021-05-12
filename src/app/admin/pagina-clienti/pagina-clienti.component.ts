import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {DialogoInserimentoClienti} from './dialoghi-clienti';
import {DialogoModificaClienti} from './dialoghi-clienti';
import { RestService } from '../../rest.service';

export interface Cliente {
  id: number;
  nome: string;
  cognome: string;
  telefono: string;
  email: string;
  password: string;
}


@Component({
  selector: 'app-pagina-clienti',
  templateUrl: './pagina-clienti.component.html',
  styleUrls: ['../admin.component.css']
})
export class PaginaClientiComponent {
  //variabile che contiene le colonne della tabella che vogliamo mostrare 
  displayedColumns: string[] = ['nome', 'cognome', 'telefono', 'email', 'azioni'];
  data:any;
  errors:any;

  constructor(public dialog: MatDialog, private restClient: RestService) {
    this.load();
  }

  //funzione per filtrare il cliente cercato
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.data.filter = filterValue.trim().toLowerCase();
  }

  //funzione che apre il dialogo per inserire il nuovo cliente
  openDialogInserimento(): void {
    const dialogRef = this.dialog.open(DialogoInserimentoClienti);
  }

  //funzione che apre il dialogo per modificare un cliente
  openDialogModifica(): void {
    const dialogRef = this.dialog.open(DialogoModificaClienti);
  }
  
  load(): void {
    this.restClient.get('http://localhost:4200/Mazzoni/API/clienti/cliente.php').subscribe(
      data => this.data = data,
      error => this.errors = error
    )
  }

  delete(id: number): void{
    this.restClient.delete('http://localhost:4200/Mazzoni/API/clienti/cliente.php?id=' + id).subscribe()
    this.load()
  }
}