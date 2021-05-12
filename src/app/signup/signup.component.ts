import { Input, Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private router: Router) {}

  form: FormGroup = new FormGroup({
    nome: new FormControl(''),
    cognome: new FormControl(''),
    telefono: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    } else {
      this.error = 'errore'
    }
  }
  @Input() error: string = '';

  @Output() submitEM = new EventEmitter();

  annulla(): void{
    this.router.navigateByUrl('');
  }
}
