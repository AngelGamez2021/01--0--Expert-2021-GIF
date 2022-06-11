import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Gif, TypeGif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = '6t4kxyWLG6qDYHfgwjGMNqp6lE1MbyuT';
  private url: string = 'https://api.giphy.com/v1/gifs/search?';
  private _historial: string[] = [];

  public resultado: Gif[] = [];

  constructor(private http: HttpClient) { 
    this._historial = JSON.parse(localStorage.getItem('historial')!) || []
  }

  get historial() {
    return [...this._historial];
  }


  buscarGifs(termino: string) {
 
    termino = termino.toLocaleLowerCase();

    if (!this._historial.includes(termino)) {
      // si no incluye(includes) el termino, pase a agregar

      this._historial.unshift(termino)
      //estamos agregando al principio

      localStorage.setItem('historial', JSON.stringify( this._historial ));
    }

    this._historial = this._historial.splice(0, 9)
    //estamos cortando hasta 10 terminos 

    this.http.get<TypeGif>(`${this.url}api_key=${this.apiKey}&q=${termino}&limit=12`)
      .subscribe(resp => {
        console.log(resp.data);

        this.resultado = resp.data;

      })

  }




}