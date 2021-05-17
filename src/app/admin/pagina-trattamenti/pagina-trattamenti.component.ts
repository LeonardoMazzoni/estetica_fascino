import { Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogoInserimentoTrattamenti } from './dialoghi-trattamenti';
import { DialogoModificaTrattamenti } from './dialoghi-trattamenti';
import { RestService } from '../../rest.service';

export interface Trattamento {
  id_trattamento: number;
  nome: string;
  durata: number;
  descrizione: string;
}

@Component({
  selector: 'app-pagina-trattamenti',
  templateUrl: './pagina-trattamenti.component.html',
  styleUrls: ['../admin.component.css']
})
export class PaginaTrattamentiComponent {

  //apiURL:string = 'http://localhost:4200/Mazzoni/API/trattamenti/trattamento.php'; */
  apiURL:string = 'http://localhost:4200/dashboard/estetica/trattamenti/trattamento.php';

  //variabile che contiene le colonne della tabella che vogliamo mostrare 
  displayedColumns: string[] = ['nome','durata', 'descrizione','azioni'];
  dataSource:any;
  errors: any;

  constructor(public dialog: MatDialog, private restClient: RestService) {
    this.load();
  }

  //funzione per filtrare il cliente cercato
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //funzione che apre il dialogo per inserire il nuovo cliente
  openDialogInserimento(): void {
    const dialogRef = this.dialog.open(DialogoInserimentoTrattamenti, {
      width: '300px'
    });
  }

  //funzione che apre il dialogo per modificare un cliente
  openDialogModifica(t: Trattamento): void {
    const dialogRef = this.dialog.open(DialogoModificaTrattamenti, {
      width: '300px',
      data: {'nome': t.nome, 'durata': t.durata, 'descrizione': t.descrizione}
    });
  }

  load(): void {
    this.restClient.get(this.apiURL).subscribe(
      data => this.dataSource = data,
      error => this.errors = error
    )
  }

  delete(id: number): void{
    this.restClient.delete(this.apiURL+'/'+id).subscribe()
    location.reload()
  }
}
