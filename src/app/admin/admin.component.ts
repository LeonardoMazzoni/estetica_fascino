import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor() {}

  //funzione di scroll automatico in un div a scelta
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: "smooth"});
  }

  mostra(el: HTMLElement){
    if (el.style.display === "none") {
      el.style.display = "block";
    } else {
      el.style.display = "none";
    }
  }
}
