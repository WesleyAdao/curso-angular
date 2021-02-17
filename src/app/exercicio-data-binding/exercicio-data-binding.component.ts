import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-binding',
  templateUrl: './exercicio-data-binding.component.html',
  styleUrls: ['./exercicio-data-binding.component.css']
})
export class ExercicioDataBindingComponent implements OnInit {

  imageURL = 'https://i.pinimg.com/736x/da/b2/58/dab2581bf4026a9dde0eac825ece58c2.jpg';
  isDisabled = true;

  constructor() { 

    setTimeout(() => {

        this.isDisabled = false;

    }, 3000);
  }

  ngOnInit(): void { }

  getImage() {

    return this.imageURL;

  }

}
