import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  pudim = 'CARRO';
  favoriteColor = "Red";
  title = "DONNA TECNOLOGIA";
  subtitulo = 'A melhor empresa de Tec do Mundo 2.0';

  valorMudouNoContador($event:any){
    console.log("valor mudou no contador ",$event);
  }

}
