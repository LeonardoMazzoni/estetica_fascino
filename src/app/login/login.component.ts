import {Input, Component} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {RestService} from '../rest.service';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  constructor(private router: Router, public app: AppComponent) {
  }

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      if(this.form.value.email == 'estetica@admin' && this.form.value.password == 'klf666402'){
        this.app.accessoAdmin = true;
        this.router.navigateByUrl('admin');
      } else this.router.navigateByUrl('home');
      
    } else {
      this.error = 'Inserisci i campi obbligatori'
    }
    this.error = 'Password o email errati'
  }
  @Input() error: string = '';
}
