import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversorMoedasService {
  private apiKey: string = 'c2c4b4e71fb6b08a680155d4';
  private apiUrl: string = `https://v6.exchangerate-api.com/v6/${this.apiKey}/pair`;
  private apiUrlSelect: string = `https://v6.exchangerate-api.com/v6/${this.apiKey}/latest/`;

  constructor(private http: HttpClient) {}

  obterConversaoPares(moedaOrigem: string, moedaDestino: string): Observable<any> {
    const url = `${this.apiUrl}/${moedaOrigem}/${moedaDestino}`;
    return this.http.get(url);
  }

  obterMoedasSuportadas(): Observable<any[]> {
    const url = `https://v6.exchangerate-api.com/v6/${this.apiKey}/codes`;
    return this.http.get<any[]>(url);
  }

  obterMoedasSelecao(baseCurrency: string): Observable<any> {
    const url = `${this.apiUrlSelect}${baseCurrency}`;
    return this.http.get<any>(url);
  }
}
