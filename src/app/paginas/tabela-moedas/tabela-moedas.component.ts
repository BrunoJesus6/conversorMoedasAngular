import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Moeda } from '../../service/detalhes-moeda/moeda.service';

interface RespostaMoedas {
  supported_codes: [string, string][];
}

@Component({
  selector: 'app-tabela-moedas',
  templateUrl: './tabela-moedas.component.html',
  styleUrls: ['./tabela-moedas.component.scss']
})
export class TabelaMoedasComponent implements OnInit {
  displayedColumns: string[] = ['codigo', 'nome'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private moeda: Moeda) {}

  ngOnInit(): void {
    this.moeda.obterMoedasSuportadas().subscribe((resposta: RespostaMoedas) => {
      const moedas = this.formatarMoedas(resposta.supported_codes);
      this.dataSource = new MatTableDataSource(moedas);
      this.configurarPaginatorESort()
    });
  }

  configurarPaginatorESort(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  formatarMoedas(moedas: [string, string][]): any[] {
    return moedas.map(moeda => {
      return { codigo: moeda[0], nome: moeda[1] };
    });
  }

  aplicarFiltro(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
