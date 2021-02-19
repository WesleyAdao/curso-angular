import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mensagemTitulo = 'Seja bem vindo';
  pudim = "pudim";

  recebendoClicado($event) {

    console.log('Evento recebido', $event);

  }

  valorAtual(novoValor) {

    console.log(novoValor);

  }

  // recebeContador() {


  // }

}
