import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio-diretivas',
  templateUrl: './exercicio-diretivas.component.html',
  styleUrls: ['./exercicio-diretivas.component.css']
})
export class ExercicioDiretivasComponent {

  conteudo = true;
  valor;

  mudar() {

    this.conteudo = !this.conteudo;

  }

  somar(n1, n2) {

    return n1 + n2;

  }

}
