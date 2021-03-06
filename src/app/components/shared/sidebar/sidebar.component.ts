import { Component } from '@angular/core';
import { GifsService } from 'src/app/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {


  constructor(private _gifsService: GifsService) { }

  get historial() {
    return this._gifsService.historial

  }


  buscar(termino: string) {

    this._gifsService.buscarGifs(termino)

  }


}
