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
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginaClientiComponent } from './admin/pagina-clienti/pagina-clienti.component';
import { PaginaMagazzinoComponent } from './admin/pagina-magazzino/pagina-magazzino.component';
import { PaginaFornitoriComponent } from './admin/pagina-fornitori/pagina-fornitori.component';
import { PaginaPrenotazioniComponent } from './admin/pagina-prenotazioni/pagina-prenotazioni.component';
import { PaginaTrattamentiComponent } from './admin/pagina-trattamenti/pagina-trattamenti.component';
import { SlideshowComponent } from './home/slideshow/slideshow.component';

import { DialogoInserimentoClienti } from "./admin/pagina-clienti/dialoghi-clienti";
import { DialogoEliminaClienti } from "./admin/pagina-clienti/dialoghi-clienti";
import { DialogoModificaClienti } from "./admin/pagina-clienti/dialoghi-clienti";

import { DialogoInserimentoProdotto } from "./admin/pagina-magazzino/dialoghi-magazzino";
import { DialogoEliminaProdotto } from "./admin/pagina-magazzino/dialoghi-magazzino";
import { DialogoModificaProdotto } from "./admin/pagina-magazzino/dialoghi-magazzino";

import { DialogoInserimentoFornitori } from "./admin/pagina-fornitori/dialoghi-fornitori";
import { DialogoEliminaFornitori } from "./admin/pagina-fornitori/dialoghi-fornitori";
import { DialogoModificaFornitori } from "./admin/pagina-fornitori/dialoghi-fornitori";


import { DialogoInserimentoTrattamenti } from "./admin/pagina-trattamenti/dialoghi-trattamenti";
import { DialogoEliminaTrattamenti } from "./admin/pagina-trattamenti/dialoghi-trattamenti";
import { DialogoModificaTrattamenti } from "./admin/pagina-trattamenti/dialoghi-trattamenti";

import { DialogoInserimentoPrenotazioni } from "./admin/pagina-prenotazioni/dialoghi-prenotazioni";
import { DialogoEliminaPrenotazioni } from "./admin/pagina-prenotazioni/dialoghi-prenotazioni";
import { DialogoModificaPrenotazioni } from "./admin/pagina-prenotazioni/dialoghi-prenotazioni";

import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';





@NgModule({
  declarations: [
    AppComponent,
    PaginaClientiComponent,
    PaginaMagazzinoComponent,
    PaginaFornitoriComponent,
    PaginaPrenotazioniComponent,
    PaginaTrattamentiComponent,
    DialogoInserimentoClienti,
    DialogoEliminaClienti,
    DialogoModificaClienti,
    DialogoInserimentoProdotto,
    DialogoEliminaProdotto,
    DialogoModificaProdotto,
    DialogoInserimentoFornitori,
    DialogoEliminaFornitori,
    DialogoModificaFornitori,
    DialogoInserimentoTrattamenti,
    DialogoEliminaTrattamenti,
    DialogoModificaTrattamenti,
    AdminComponent,
    HomeComponent,
    SlideshowComponent,
    DialogoInserimentoPrenotazioni,
    DialogoEliminaPrenotazioni,
    DialogoModificaPrenotazioni
    
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
    MatDialogModule,
    MatTabsModule,
    MatSelectModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
