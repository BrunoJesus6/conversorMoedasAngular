import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HistoricoConversoesService } from '../../service/historico-conversao/historico-conversao.service';

@Component({
  selector: 'app-historico-conversoes',
  templateUrl: './historico-conversoes.component.html',
  styleUrls: ['./historico-conversoes.component.scss']
})
export class HistoricoComponent implements OnInit {
  displayedColumns: string[] = ['data', 'hora', 'valorEntrada', 'moedaEntrada', 'valorSaida', 'moedaSaida', 'taxa', 'acoes'];
  dataSource = new MatTableDataSource<any>();

  constructor(private historicoConversoesService: HistoricoConversoesService) {}

  ngOnInit(): void {
    this.carregarHistorico();
  }

  carregarHistorico(): void {
    this.historicoConversoesService.obterHistorico().subscribe((conversoes) => {
      this.dataSource.data = conversoes;
    });
  }

  deletarConversao(index: number): void {
    this.historicoConversoesService.removerConversao(index);
    this.carregarHistorico();
  }

  limparHistorico(): void {
    this.historicoConversoesService.limparHistorico();
    this.carregarHistorico();
  }
}
