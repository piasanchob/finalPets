import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss'],
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
export class CatalogoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      src: 'assets/images/productos/anuncio1.png',
    };
    this.slides[1] = {
      src: 'assets/images/productos/producto2.jpg',
    }
    this.slides[2] = {
      src: 'assets/images/productos/producto3.jpg',
    }
    this.slides[3] = {
      src: 'assets/images/productos/producto4.jpg',
    }
  }

  sideMenuOpen = false;
  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  closeSideMenu(){
    this.sideMenuOpen = false;
  }

  openSideMenu(){
    this.sideMenuOpen = true;
  }

}
