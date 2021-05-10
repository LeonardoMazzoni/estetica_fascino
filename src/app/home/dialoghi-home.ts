import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Cliente} from '../admin/pagina-clienti/pagina-clienti.component';

//login
@Component({
    selector: 'dialogo-login',
    templateUrl: './dialoghi/login.html',
})
export class DialogoLogin {
    constructor(
        public dialogRef: MatDialogRef<DialogoLogin>,
        @Inject(MAT_DIALOG_DATA) public dati: Cliente
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }
}

//signin
@Component({
    selector: 'dialogo-signin',
    templateUrl: './dialoghi/signin.html',
})
export class DialogoSignin {
    constructor(
        public dialogRef: MatDialogRef<DialogoLogin>,
        @Inject(MAT_DIALOG_DATA) public dati: Cliente
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }
}