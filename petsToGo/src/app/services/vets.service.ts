import { Injectable } from '@angular/core';
import { Veterinarios } from '../models/vets';

@Injectable({
  providedIn: 'root'
})
export class VetsService {

  constructor() { }


  public getVets() : Veterinarios[] {
    let veterinario = new Veterinarios();

    veterinario.nombre = 'Veterinaria Happy Paws';
    veterinario.descripcion = 'Servicios Veterinarios de calidad, experiencia garantizada';
    veterinario.ubiexacta = 'Del Cementerio de Tres Ríos, 100 metros norte';
    veterinario.numero = '83699078';
    veterinario.ubicacion = 'Cartago';
    veterinario.nota = 9;
    veterinario.horario = 'Lunes a Sábado de 10 am a 7 pm';
    veterinario.especialidad = 'General';
    
    return [veterinario];

  }
}
