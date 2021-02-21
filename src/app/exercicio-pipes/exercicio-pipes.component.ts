import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio-pipes',
  templateUrl: './exercicio-pipes.component.html',
  styleUrls: ['./exercicio-pipes.component.css']
})
export class ExercicioPipesComponent {

  filme = {
    titulo: 'Harry Potter',
    estrelas: '3.24235',
    precoAluguel: '15.45',
    dataLancamento: new Date(2019, 5, 30)
  }

}
