import { Component, OnInit } from '@angular/core';
import { ConversorMoedasService } from '../../service/conversor-moeda/conversor-moeda.service';
import { HistoricoConversoesService } from '../../service/historico-conversao/historico-conversao.service';

@Component({
  selector: 'app-conversor-moedas',
  templateUrl: './conversor-moedas.component.html',
  styleUrls: ['./conversor-moedas.component.scss']
})
export class ConversorMoedasComponent implements OnInit {
  moedas: { code: string; name: string }[] = [];
  moedaOrigem: string = 'BRL';
  moedaDestino: string = 'USD';
  valor: number = 1;
  resultado: number | null = null;
  taxaDeCambio: number | null = null;
  erro: string | null = null;

  constructor(
    private conversorMoedasService: ConversorMoedasService,
    private historicoConversaoService: HistoricoConversoesService
  ) {}

  ngOnInit(): void {
    this.obterMoedas();
  }

  obterMoedas() {
    this.conversorMoedasService.obterMoedasSuportadas().subscribe(
      (resposta: any) => {
        console.log('Resposta da API:', resposta);
        if (resposta && resposta.supported_codes) {
          this.moedas = resposta.supported_codes.map((moeda: [string, string]) => ({
            code: moeda[0],
            name: moeda[1]
          }));
        } else {
          this.erro = 'Nenhuma moeda encontrada.';
        }
      },
      (error) => {
        console.error('Erro ao obter moedas:', error);
        this.erro = 'Erro ao carregar as moedas. Tente novamente.';
      }
    );
  }

  converter(): void {
    this.erro = null;
    if (this.moedaOrigem && this.moedaDestino && this.valor) {
      this.conversorMoedasService.obterConversaoPares(this.moedaOrigem, this.moedaDestino)
        .subscribe(
          (resposta) => {
            this.taxaDeCambio = resposta.conversion_rate;
            this.resultado = this.valor * (this.taxaDeCambio ?? 1);

            const conversao = {
              data: new Date().toLocaleDateString(),
              hora: new Date().toLocaleTimeString(),
              valorEntrada: this.valor,
              moedaEntrada: this.moedaOrigem,
              valorSaida: this.resultado,
              moedaSaida: this.moedaDestino,
              taxa: this.taxaDeCambio ?? 0,
            };

            this.historicoConversaoService.adicionarConversao(conversao);
          },
          (error) => {
            this.erro = 'Erro ao realizar a conversão. Verifique as moedas e tente novamente.';
            console.error(error);
          }
        );
    } else {
      this.erro = 'Por favor, preencha todos os campos.';
    }
  }
}
