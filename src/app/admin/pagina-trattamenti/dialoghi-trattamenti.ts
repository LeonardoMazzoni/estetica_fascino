import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Trattamento} from '../pagina-trattamenti/pagina-trattamenti.component';
import {RestService} from '../../rest.service';
import {FormGroup, FormControl } from '@angular/forms';


//inserimento
@Component({
    selector: 'dialogo-inserimento-trattamenti',
    templateUrl: './dialoghi/inserimento.html',
})
export class DialogoInserimentoTrattamenti {
    constructor(
        public dialogRef: MatDialogRef<DialogoInserimentoTrattamenti>,
        @Inject(MAT_DIALOG_DATA) public dati: Trattamento,
        private restClient: RestService
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }

    apiURL:string = 'http://localhost:4200/Mazzoni/API/trattamenti/trattamento.php';
    /* apiURL:string = 'http://localhost:4200/dashboard/estetica/trattamenti/trattamento.php'; */

    form: FormGroup = new FormGroup({
        nome: new FormControl(''),
        durata: new FormControl(''),
        descrizione: new FormControl(''),
    });

    error: any;
    
    submit() {
        if(this.form.valid){
            this.restClient.add(this.apiURL, this.form.value).subscribe()
            this.dialogRef.close()
            location.reload()
        location.reload()
        } else{
            this.error = "Inserire i campi obbligatori"
        }
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
        @Inject(MAT_DIALOG_DATA) public dati: Trattamento,
        private restClient: RestService
        ) {}
    
        onNoClick(): void {
            this.dialogRef.close();
        }
    
        apiURL:string = 'http://localhost:4200/Mazzoni/API/trattamenti/trattamento.php';
        /* apiURL:string = 'http://localhost:4200/dashboard/estetica/trattamenti/trattamento.php'; */
    
        form: FormGroup = new FormGroup({
            id: new FormControl(this.dati.id),
            nome: new FormControl(this.dati.nome),
            durata: new FormControl(this.dati.durata),
            descrizione: new FormControl(this.dati.descrizione),
        });
    
        
        submit() {
            this.restClient.update(this.apiURL + '/'+ this.dati.id, this.form.value).subscribe()
            this.dialogRef.close()
            location.reload()
        }
}