import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Prenotazione} from './pagina-prenotazioni.component';

//inserimento
@Component({
    selector: 'dialogo-inserimento-prenotazioni',
    templateUrl: './dialoghi/inserimento.html',
})
export class DialogoInserimentoPrenotazioni {
    constructor(
        public dialogRef: MatDialogRef<DialogoInserimentoPrenotazioni>,
        @Inject(MAT_DIALOG_DATA) public dati: Prenotazione
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }
}

//modifica
@Component({
    selector: 'dialogo-modifica-prenotazioni',
    templateUrl: './dialoghi/modifica.html',
})
export class DialogoModificaPrenotazioni {
    constructor(
        public dialogRef: MatDialogRef<DialogoModificaPrenotazioni>,
        @Inject(MAT_DIALOG_DATA) public dati: Prenotazione
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }
}