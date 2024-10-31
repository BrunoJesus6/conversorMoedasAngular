import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatOptionModule } from '@angular/material/core';
import { AppComponent } from './app.component';
import { TabelaMoedasComponent } from './paginas/tabela-moedas/tabela-moedas.component';
import { PaginaInicialComponent } from './paginas/pagina-inicial/pagina-inicial.component';
import { NavbarComponent } from './paginas/navbar/navbar.component';
import { ConversorMoedasComponent } from './paginas/conversor-moedas/conversor-moedas.component';
import { HistoricoComponent } from './paginas/historico-conversoes/historico-conversoes.component';

const routes: Routes = [
  { path: '', component: PaginaInicialComponent },
  { path: 'conversao', component: ConversorMoedasComponent },
  { path: 'lista-moedas', component: TabelaMoedasComponent },
  { path: 'historico', component:  HistoricoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TabelaMoedasComponent,
    PaginaInicialComponent,
    NavbarComponent,
    ConversorMoedasComponent,
    HistoricoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatOptionModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
