import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-agregar-mascota',
  templateUrl: './agregar-mascota.component.html',
  styleUrls: ['./agregar-mascota.component.scss'],
  animations: [
    //animations triggers go here
    trigger(
      'openCloseSideMenu', [
        state('closed', style({
          'margin-left': '-80rem',
        })),
        state('open', style({
          'margin-left': "0",
        })),
        transition('open => closed', [animate('0.2s')]),
        transition('closed => open', [animate('0.2s')])
      ]
    )
  ]
})
export class AgregarMascotaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sideMenuOpen = false;
  value = 25;

  closeSideMenu(){
    this.sideMenuOpen = false;
  }

  openSideMenu(){
    this.sideMenuOpen = true;
  }

  getInputValue(nombre:string, tamano:string, tipo:string, edad:string, descripcion:string, raza:string, peso:string ){
    console.log(nombre,tamano,tipo,edad,descripcion,raza,peso)
  }


}
