import {Component} from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import {RestService} from '../rest.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  data : any;
  error: any;

  constructor(private router: Router,  private restClient: RestService) {}

  apiURL:string = 'http://localhost:4200/API/clienti/cliente.php';

  form: FormGroup = new FormGroup({
    nome: new FormControl(''),
    cognome: new FormControl(''),
    telefono: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  
  submit() {
    if (this.form.valid) {
      this.restClient.add(this.apiURL, this.form.value).subscribe(data => this.data = data)
      if(this.data != 'Email gia esistente') {
        this.router.navigateByUrl('');
      } else this.error = this.data;
    } else {
      this.error = 'Inserisci i campi obbligatori'
    }
  }
  
  annulla(): void{
    this.router.navigateByUrl('');
  }
}
