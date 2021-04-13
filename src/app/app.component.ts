import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "esteticaFascino";

  //funzione di scroll automatico in un div a scelta
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: "smooth"});
  }
}
