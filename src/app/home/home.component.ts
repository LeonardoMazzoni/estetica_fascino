import {Component} from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import {RestService} from '../rest.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  apiURL:string = 'http://localhost:4200/Mazzoni/API/trattamenti/trattamento.php';
  /* apiURL:string = 'http://localhost:4200/dashboard/estetica/trattamenti/trattamento.php'; */
  trattamenti: any;
  data : any;
  error: any;

  constructor(private restClient: RestService, private router: Router) {
    this.loadTrattamenti();
  }

  form: FormGroup = new FormGroup({
    trattamento: new FormControl(''),
    data: new FormControl(''),
    ora: new FormControl('')
  });

  submit() {
    if(this.form.valid){
      console.log(this.form.value),
      alert('pisellos')
    } else {
      this.error = 'Inserire i campi Obbligatori';
    }
  } 

  loadTrattamenti(): void {
    this.restClient.get(this.apiURL).subscribe(
      data => this.trattamenti = data,
      error => this.error = error.value
    )
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Sunday and monkday from being selected.
    return day !== 1 && day !== 0;
  };

  logout(){
    this.router.navigateByUrl('');
  }
}