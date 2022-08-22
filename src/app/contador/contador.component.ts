import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {

  constructor() { }

  @Input() contador = 0;
  @Output() avisaPai:EventEmitter<any> = new EventEmitter();

  mostrar = true;
  
  incrementa(){
    this.avisaPai.emit(this.contador);
    this.contador++;
    if(this.contador>0){
      this.mostrar = true;
    }
  }

  decrementa(){
    this.avisaPai.emit(this.contador);
    this.contador--;
    if(this.contador<0){
      this.contador=0;
      this.mostrar = false;
    }
  }

  avisaPaiDecrementa(){
    this.avisaPai.emit("Pai! Decrementou");
  }
  avisaPaiIncremento(){
    this.avisaPai.emit("Pai! Incrementou");
  }
  
  
  ngOnInit(): void {
  }

}
