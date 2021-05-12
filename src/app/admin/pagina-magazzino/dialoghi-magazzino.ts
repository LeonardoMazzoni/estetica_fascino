import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Prodotto} from '../pagina-magazzino/pagina-magazzino.component';

//inserimento
@Component({
    selector: 'dialogo-inserimento-magazzino',
    templateUrl: './dialoghi/inserimento.html',
})
export class DialogoInserimentoProdotto {
    constructor(
        public dialogRef: MatDialogRef<DialogoInserimentoProdotto>,
        @Inject(MAT_DIALOG_DATA) public dati: Prodotto
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }
}

//modifica
@Component({
    selector: 'dialogo-modifica-prodotto',
    templateUrl: './dialoghi/modifica.html',
})
export class DialogoModificaProdotto{
    constructor(
        public dialogRef: MatDialogRef<DialogoModificaProdotto>,
        @Inject(MAT_DIALOG_DATA) public dati: Prodotto
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }
}