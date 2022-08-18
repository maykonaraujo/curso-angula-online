import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-binding',
  templateUrl: './exercicio-data-binding.component.html',
  styleUrls: ['./exercicio-data-binding.component.scss']
})
export class ExercicioDataBindingComponent implements OnInit {

  imageURL = "https://amplino.org/wp-content/uploads/2020/02/gato-fofo.jpg";
  initialValue = "Valor inicial";
  isDisabled = true;
  accessibilityText = 'Um texto acessível';

  getImageUrl = () =>{
    return this.imageURL;
  }

  constructor() { 
    setTimeout(() => {
      this.isDisabled=false;
    }, 3000);
  }

  ngOnInit(): void {
  }

}
