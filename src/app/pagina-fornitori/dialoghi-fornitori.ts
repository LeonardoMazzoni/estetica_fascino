import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Fornitore} from './pagina-fornitori.component';

//inserimento
@Component({
    selector: 'dialogo-inserimento-fornitori',
    templateUrl: './dialoghi/inserimento.html',
})
export class DialogoInserimentoFornitori {
    constructor(
        public dialogRef: MatDialogRef<DialogoInserimentoFornitori>,
        @Inject(MAT_DIALOG_DATA) public dati: Fornitore
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }
}

//elimina
@Component({
    selector: 'dialogo-elimina-fornitori',
    templateUrl: './dialoghi/elimina.html',
})
export class DialogoEliminaFornitori {
    constructor(
        public dialogRef: MatDialogRef<DialogoEliminaFornitori>
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }
}

//modifica
@Component({
    selector: 'dialogo-modifica-fornitori',
    templateUrl: './dialoghi/modifica.html',
})
export class DialogoModificaFornitori {
    constructor(
        public dialogRef: MatDialogRef<DialogoModificaFornitori>,
        @Inject(MAT_DIALOG_DATA) public dati: Fornitore
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }
}