import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio-diretivas',
  templateUrl: './exercicio-diretivas.component.html',
  styleUrls: ['./exercicio-diretivas.component.css']
})
export class ExercicioDiretivasComponent {

  conteudo = true;
  listaFrutas = ['Maçã', 'Laranja', 'Mamão', 'Pêra'];
  listaCarros = [{
    nomeCarro: 'Civic',
    cor: 'Preto',
  },
  {
    nomeCarro: 'Corola',
    cor: 'Azul',
  },
  {
    nomeCarro: 'Azera',
    cor: 'Prata',
  },
  {
    nomeCarro: 'City',
    cor: 'Vermelho'
  }
];

  mudar() {

    this.conteudo = !this.conteudo;

  }

  somar(n1, n2) {

    return n1 + n2;

  }

}
