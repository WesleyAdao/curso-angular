import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-exercicio-contador',
  templateUrl: './exercicio-contador.component.html',
  styleUrls: ['./exercicio-contador.component.css']
})

export class ExercicioContadorComponent implements OnInit {

  @Input() valor;
  @Output() valorChange = new EventEmitter();

  constructor() { }
  ngOnInit(): void { }

  incrementar() {

    this.valor += 1;
    this.valorChange.emit(this.valor);

  }

  decrementar() {

    this.valor -= 1;
    this.valorChange.emit(this.valor);

  }

}
