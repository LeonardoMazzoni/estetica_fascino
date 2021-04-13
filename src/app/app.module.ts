import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginaClientiComponent } from './pagina-clienti/pagina-clienti.component';
import { PaginaMagazzinoComponent } from './pagina-magazzino/pagina-magazzino.component';
import { PaginaFornitoriComponent } from './pagina-fornitori/pagina-fornitori.component';
import { PaginaPrenotazioniComponent } from './pagina-prenotazioni/pagina-prenotazioni.component';
import { PaginaTrattamentiComponent } from './pagina-trattamenti/pagina-trattamenti.component';
import { DialogoInserimentoClienti } from "./pagina-clienti/pagina-clienti.component";


@NgModule({
  declarations: [
    AppComponent,
    PaginaClientiComponent,
    PaginaMagazzinoComponent,
    PaginaFornitoriComponent,
    PaginaPrenotazioniComponent,
    PaginaTrattamentiComponent,
    DialogoInserimentoClienti
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatTableModule,
    MatSortModule,
    FormsModule,
    MatInputModule,
    MatDialogModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'legacy' } },],
  bootstrap: [AppComponent],
})
export class AppModule { }
