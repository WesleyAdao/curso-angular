import { Component } from '@angular/core';
import { MEMES_AGRUPADOS_POR_CATEGORIA } from './exercicios-diretivas.constante';

@Component({
  selector: 'app-exercicio-diretivas',
  templateUrl: './exercicio-diretivas.component.html',
  styleUrls: ['./exercicio-diretivas.component.css']
})
export class ExercicioDiretivasComponent {

  conteudo = true;
  prefixoImagens = "https://raw.githubusercontent.com/vitorfgsantos/angular-memes-diretivas/master/images";
  MEMES_AGRUPADOS_POR_CATEGORIA  = MEMES_AGRUPADOS_POR_CATEGORIA ;
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
