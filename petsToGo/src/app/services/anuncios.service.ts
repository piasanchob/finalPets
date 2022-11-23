import { Injectable } from '@angular/core';
import { Anuncios } from '../models/anuncios';

@Injectable({
  providedIn: 'root'
})
export class AnunciosService {

  constructor() { }

  public getAnuncios() : Anuncios[] {
    let anuncio = new Anuncios();

    anuncio.nombre = 'Copito';
    anuncio.tamaño_id = '1';
    anuncio.tipo_id = '1';
    anuncio.provincia_id = '2';
    anuncio.nivel_id = '1';
    anuncio.etapa_id = '3';
    anuncio.usuario_id = '1';
    anuncio.descripcion = 'Perro para adopción';
    anuncio.correo= 'piasancho1@hotmail.com';
    anuncio.tel = "83721455";

    return [anuncio];

  }

}
