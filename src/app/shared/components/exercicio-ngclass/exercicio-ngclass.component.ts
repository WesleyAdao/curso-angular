import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio-ngclass',
  templateUrl: './exercicio-ngclass.component.html',
  styleUrls: ['./exercicio-ngclass.component.css']
})
export class ExercicioNgclassComponent {

  cor = false;

  mudarCor() {

    this.cor = !this.cor;

  }

}
