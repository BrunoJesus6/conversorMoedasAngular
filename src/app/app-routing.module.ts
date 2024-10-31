import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './paginas/pagina-inicial/pagina-inicial.component';
import { ConversorMoedasComponent } from './paginas/conversor-moedas/conversor-moedas.component';
import { TabelaMoedasComponent } from './paginas/tabela-moedas/tabela-moedas.component';
import { HistoricoComponent } from './paginas/historico-conversoes/historico-conversoes.component';

const routes: Routes = [
  { path: '', component: PaginaInicialComponent },
  { path: 'conversao', component: ConversorMoedasComponent },
  { path: 'lista-moedas', component: TabelaMoedasComponent },
  { path: 'historico', component: HistoricoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
