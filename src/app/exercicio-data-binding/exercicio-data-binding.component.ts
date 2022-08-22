import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-binding',
  templateUrl: './exercicio-data-binding.component.html',
  styleUrls: ['./exercicio-data-binding.component.scss']
})
export class ExercicioDataBindingComponent implements OnInit {

  @Input() palavra?: string;
  @Input() color?: string;
  @Output() clicado: EventEmitter<any> = new EventEmitter();

  imageURL = "https://amplino.org/wp-content/uploads/2020/02/gato-fofo.jpg";
  initialValue = "Valor inicial";
  isDisabled = true;
  accessibilityText = 'Um texto acessível';
  valorInput = "";
  getImageUrl = () =>{
    return this.imageURL;
  }

  clicou($event: any){
    console.log('clicou', $event.clientX);
  }

  digitouAlgo($event: any){
    this.valorInput = $event.target.value;
    console.log('digitou', $event);
  }

  onClickBotaoEmissor($event:any){
    console.log('de filho pra pai');
    this.clicado.emit();
  }

  constructor() { 
    setTimeout(() => {
      this.isDisabled=false;
    }, 3000);
  }

  ngOnInit(): void {
  }

}
