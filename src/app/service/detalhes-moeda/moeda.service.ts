import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Moeda {
  private apiKey = 'c2c4b4e71fb6b08a680155d4';
  private baseUrl = `https://v6.exchangerate-api.com/v6/${this.apiKey}`;

  constructor(private http: HttpClient) {}

  obterMoedasSuportadas(): Observable<any> {
    const url = `${this.baseUrl}/codes`;
    return this.http.get<any>(url);
  }
}