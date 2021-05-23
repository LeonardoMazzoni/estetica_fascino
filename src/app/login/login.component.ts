import { NgStyle } from '@angular/common';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import {Input, Component} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {RestService} from '../rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  constructor(private router: Router, private rest: RestService) {
  }

  apiURL = 'http://localhost:4200/API/clienti/cliente.php';

  data:any;
  error: any;

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      this.rest.get(this.apiURL+"?email="+ this.form.value.email +"&password="+ this.form.value.password).subscribe(data => this.data = data);
      setTimeout(() => {
          if(this.data == 'admin') {
            this.router.navigateByUrl('admin');
          } else if (this.data == 'cliente') this.router.navigateByUrl('home');
          else this.error = this.data;
        }, 50);
    } else {
      this.error = 'Inserisci i campi obbligatori'
    }
  }
}
