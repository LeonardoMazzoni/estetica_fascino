import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Trattamento} from '../pagina-trattamenti/pagina-trattamenti.component';

//inserimento
@Component({
    selector: 'dialogo-inserimento-trattamenti',
    templateUrl: './dialoghi/inserimento.html',
})
export class DialogoInserimentoTrattamenti {
    constructor(
        public dialogRef: MatDialogRef<DialogoInserimentoTrattamenti>,
        @Inject(MAT_DIALOG_DATA) public dati: Trattamento
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }
}

//elimina
@Component({
    selector: 'dialogo-elimina-trattamenti',
    templateUrl: './dialoghi/elimina.html',
})
export class DialogoEliminaTrattamenti {
    constructor(
        public dialogRef: MatDialogRef<DialogoEliminaTrattamenti>
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }
}

//modifica
@Component({
    selector: 'dialogo-modifica-trattamenti',
    templateUrl: './dialoghi/modifica.html',
})
export class DialogoModificaTrattamenti{
    constructor(
        public dialogRef: MatDialogRef<DialogoModificaTrattamenti>,
        @Inject(MAT_DIALOG_DATA) public dati: Trattamento
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }
}