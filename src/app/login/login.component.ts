import { NgStyle } from '@angular/common';
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

  apiURL = 'http://localhost/API/clienti/cliente.php';

  data:any;

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      this.rest.get(this.apiURL).subscribe(data => this.data = data)
      if(this.data == 'admin') {
        this.router.navigateByUrl('admin');
      }
    } else {
      this.error = 'Inserisci i campi obbligatori'
    }
  }
  @Input() error: string = '';
}
