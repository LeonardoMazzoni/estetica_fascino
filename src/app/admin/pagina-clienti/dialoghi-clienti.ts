import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Cliente} from './pagina-clienti.component';

//inserimento
@Component({
    selector: 'dialogo-inserimento-clienti',
    templateUrl: './dialoghi/inserimento.html',
})
export class DialogoInserimentoClienti {
    constructor(
        public dialogRef: MatDialogRef<DialogoInserimentoClienti>,
        @Inject(MAT_DIALOG_DATA) public dati: Cliente
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }
}
//modifica
@Component({
    selector: 'dialogo-modifica-clienti',
    templateUrl: './dialoghi/modifica.html',
})
export class DialogoModificaClienti {
    constructor(
        public dialogRef: MatDialogRef<DialogoModificaClienti>,
        @Inject(MAT_DIALOG_DATA) public dati: Cliente
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }
}