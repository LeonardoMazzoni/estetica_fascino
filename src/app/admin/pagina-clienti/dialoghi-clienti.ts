import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Cliente} from './pagina-clienti.component';
import {RestService} from '../../rest.service';
import {FormGroup, FormControl } from '@angular/forms';

//inserimento
@Component({
    selector: 'dialogo-inserimento-clienti',
    templateUrl: './dialoghi/inserimento.html',
})
export class DialogoInserimentoClienti {
    constructor(
        public dialogRef: MatDialogRef<DialogoInserimentoClienti>,
        @Inject(MAT_DIALOG_DATA) public dati: Cliente,
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
        @Inject(MAT_DIALOG_DATA) public dati: Cliente,
        private restClient: RestService
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }

    apiURL:string = 'http://localhost:4200/Mazzoni/API/clienti/cliente.php'; 
    //apiURL:string = 'http://localhost:4200/dashboard/estetica/clienti/cliente.php';

    form: FormGroup = new FormGroup({
        id:new FormControl(this.dati.id),
        nome: new FormControl(this.dati.nome),
        cognome: new FormControl(this.dati.cognome),
        telefono: new FormControl(this.dati.telefono),
        email: new FormControl(this.dati.email),
    });

    
    submit() {
        this.restClient.update(this.apiURL + '/'+ this.dati.id, this.form.value).subscribe()
        this.dialogRef.close()
        location.reload()
    }
}