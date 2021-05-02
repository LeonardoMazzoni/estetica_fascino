import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {DialogoInserimentoProdotto} from './dialoghi-magazzino';
import {DialogoEliminaProdotto} from './dialoghi-magazzino';
import {DialogoModificaProdotto} from './dialoghi-magazzino';

export interface Prodotto {
  codice_prodotto: string;
  nome: string;
  descrizione: string;
  quantita: number;
  prezzo_vendita: number;
  prezzo_acquisto: number;
  id_fornitore: number;
}

const ELEMENT_DATA: Prodotto[] = [
  {codice_prodotto: 'A', nome: 'nome 1', descrizione: 'Descrizione prodotto 1', quantita: 3, prezzo_vendita: 10.5, prezzo_acquisto: 5.25, id_fornitore: 2},
  {codice_prodotto: 'B', nome: 'nome 2', descrizione: 'Descrizione prodotto 2', quantita: 3, prezzo_vendita: 10.5, prezzo_acquisto: 5.25, id_fornitore: 2},
  {codice_prodotto: 'C', nome: 'nome 3', descrizione: 'Descrizione prodotto 3', quantita: 3, prezzo_vendita: 10.5, prezzo_acquisto: 5.25, id_fornitore: 2},
];


@Component({
  selector: 'app-pagina-magazzino',
  templateUrl: './pagina-magazzino.component.html',
  styleUrls: ['../admin.component.css']
})
export class PaginaMagazzinoComponent{

  //variabile che contiene le colonne della tabella che vogliamo mostrare 
  displayedColumns: string[] = ['codice_prodotto','nome', 'descrizione', 'quantita', 'prezzo_vendita', 'prezzo_acquisto', 'azioni'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(public dialog: MatDialog) {}

  //funzione per filtrare il cliente cercato
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //funzione che apre il dialogo per inserire il nuovo cliente
  openDialogInserimento(): void {
    const dialogRef = this.dialog.open(DialogoInserimentoProdotto);
  }

  //funzione che apre il dialogo per modificare un cliente
  openDialogModifica(): void {
    const dialogRef = this.dialog.open(DialogoModificaProdotto);
  }

  //funzione che apre il dialogo per confermare l'eliminazione del cliente
  openDialogElimina(): void {
    const dialogRef = this.dialog.open(DialogoEliminaProdotto);
  }
}
