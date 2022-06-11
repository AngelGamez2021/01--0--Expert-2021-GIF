import { Component } from '@angular/core';
import { GifsService } from 'src/app/services/gifs.service';

@Component({
  selector: 'app-container-gifs',
  templateUrl: './container-gifs.component.html',
  styleUrls: ['./container-gifs.component.css']
})
export class ContainerGifsComponent  {

  contenido: any[] = [];

  constructor(private _gifsService: GifsService) { }

 get resultado(){
   return this._gifsService.resultado;
  }

}
