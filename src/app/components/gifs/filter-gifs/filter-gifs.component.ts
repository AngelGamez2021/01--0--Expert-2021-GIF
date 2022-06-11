import { ElementRef, Component, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/services/gifs.service';

@Component({
  selector: 'app-filter-gifs',
  templateUrl: './filter-gifs.component.html',
  styleUrls: ['./filter-gifs.component.css']
})
export class FilterGifsComponent {

  constructor(private _gifsService: GifsService){}

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;


  buscar() {

    const valor = this.txtBuscar.nativeElement.value;
    //el valor obtenido de la caja de texto,
    //lo mandamos al servicio

    if(valor.trim().length === 0){return;}

    this._gifsService.buscarGifs(valor)

    this.txtBuscar.nativeElement.value='';
    

  }


}
