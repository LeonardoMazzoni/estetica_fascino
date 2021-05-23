import {Component} from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import {RestService} from '../rest.service';
import {Prenotazione} from '../admin/pagina-prenotazioni/pagina-prenotazioni.component';

let confermate: Prenotazione[] = [
  {id: 1, data: ['2021-05-25'], ora: ['12:30'], trattamento: 'Manicure', cliente: 'leonardomazzoni02@gmail.com'},
  {id: 2, data: ['2021-06-26'], ora: ['14:45'], trattamento: 'Pedicure', cliente: 'leonardomazzoni02@gmail.com'},
  {id: 3, data: ['2021-07-28'], ora: ['17:15'], trattamento: 'Ceretta', cliente: 'leonardomazzoni02@gmail.com'},
  {id: 4, data: ['2021-08-03'], ora: ['10:30'], trattamento: 'Ceretta', cliente: 'leonardomazzoni02@gmail.com'},
  {id: 5, data: ['2021-08-03'], ora: ['11:30'], trattamento: 'Solarium', cliente: 'leonardomazzoni02@gmail.com'},

];

let non_confermate: Prenotazione[] = [
  {id: 6, data: ['2021-08-11', '2021-08-15'], ora: ['12:30', '12:30'], trattamento: 'Manicure', cliente: 'leonardomazzoni02@gmail.com'},
  {id: 7, data: ['2021-09-15', '2021-09-16'], ora: ['14:15', '13:15'], trattamento: 'Pedicure', cliente: 'leonardomazzoni02@gmail.com'},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  confermate: string[] = ['trattamento', 'data'];
  non_confermate: string[] = ['trattamento', 'data','azioni'];
  apiURL:string = 'http://localhost:4200/API/trattamenti/trattamento.php';
  trattamenti: any;
  prenotazioni_confermate = confermate;
  prenotazioni_non_confermate = non_confermate; 
  data : any;
  error: any;
  preferenze: any =[new FormGroup({
      data: new FormControl(''),
      ora: new FormControl('')
    })
  ];

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
      console.log(this.form.value)
    } else {
      this.error = 'Inserire i campi Obbligatori';
    }
  } 

  newPreferenza() {
    this.preferenze.push(new FormGroup({
      data: new FormControl(''),
      ora: new FormControl('')
    }))
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