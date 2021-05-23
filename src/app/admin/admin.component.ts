import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor(private router: Router) {}

  //funzione di scroll automatico in un div a scelta
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: "smooth"});
  }

  logout() {
    this.router.navigateByUrl('');
  }
}
