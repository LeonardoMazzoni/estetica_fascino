import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
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

  apiURL:string = 'http://localhost:4200/API/clienti/cliente.php';

  constructor(public dialog: MatDialog, private restClient: RestService) {
    this.load();
  }

  //funzione per filtrare il cliente cercato
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.data.filter = filterValue.trim().toLowerCase();
  }

  //funzione che apre il dialogo per modificare un cliente
  openDialogModifica(cliente: Cliente): void {
    const dialogRef = this.dialog.open(DialogoModificaClienti, {
      width: '300px',
      data: {'id': cliente.id,'nome': cliente.nome, 'cognome': cliente.cognome, 'email': cliente.email, 'telefono': cliente.telefono}
    });
  }
  
  load(): void {
    this.restClient.get(this.apiURL).subscribe(
      data => this.data = data,
      error => this.errors = error
    )
  }

  delete(id: number): void{
    this.restClient.delete(this.apiURL+'/'+id).subscribe()
    location.reload()
  }
}