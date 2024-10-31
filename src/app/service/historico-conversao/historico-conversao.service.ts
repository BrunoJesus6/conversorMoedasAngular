import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoricoConversoesService {
  private historico$ = new BehaviorSubject<any[]>(this.carregarHistoricoLocalStorage());

  private atualizarLocalStorage() {
    localStorage.setItem('historicoConversoes', JSON.stringify(this.historico$.value));
  }

  private carregarHistoricoLocalStorage(): any[] {
    const historico = localStorage.getItem('historicoConversoes');
    return historico ? JSON.parse(historico) : [];
  }

  adicionarConversao(conversao: any): void {
    const conversoes = this.historico$.value;
    conversoes.push(conversao);
    this.historico$.next(conversoes);
    this.atualizarLocalStorage();
  }

  obterHistorico() {
    return this.historico$.asObservable();
  }

  removerConversao(index: number): void {
    const conversoes = this.historico$.value;
    conversoes.splice(index, 1);
    this.historico$.next(conversoes);
    this.atualizarLocalStorage();
  }

  limparHistorico(): void {
    this.historico$.next([]);
    this.atualizarLocalStorage();
  }
}
