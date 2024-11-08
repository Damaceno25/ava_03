import { Component } from '@angular/core';

@Component({
  selector: 'app-cep-consulta',
  templateUrl: './cep-consulta.page.html',
  styleUrls: ['./cep-consulta.page.scss'],
})
export class CepConsultaPage {
  cep: string = '';
  endereco: any = {
    logradouro: '',
    bairro: '',
    localidade: '',
    uf: '',
    ibge: ''
  };

  constructor() {}

  limpaFormularioCep() {
    this.endereco = {
      logradouro: '',
      bairro: '',
      localidade: '',
      uf: '',
      ibge: ''
    };
  }

  async pesquisarCep() {
    const cep = this.cep.replace(/\D/g, '');

    if (cep.length !== 8) {
      alert('Por favor, insira um CEP válido com 8 dígitos.');
      this.limpaFormularioCep();
      return;
    }

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        alert('CEP não encontrado.');
        this.limpaFormularioCep();
      } else {
        this.endereco = data;
      }
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
      alert('Ocorreu um erro. Tente novamente.');
    }
  }
}
