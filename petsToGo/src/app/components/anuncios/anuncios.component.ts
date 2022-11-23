import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.scss'],
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
export class AnunciosComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() anuncio:any;
  id:number;
  nombre:string;
  tamaño_id:string;
  tipo_id:string;
  provincia_id:string;
  nivel_id:string;
  etapa_id:string;
  usuario_id:string;
  descripcion:string
  correo:string;
  tel:string;

  ngOnInit(): void {
    
  }

  loadList(){
    this.service.getAllAnuncios().subscribe((data:any)=>{
      this.id = this.anuncio.id;
      this.nombre = this.anuncio.nombre;
      this.tamaño_id = this.anuncio.tamaño_id;
      this.tipo_id = this.anuncio.tipo_id;
      this.provincia_id = this.anuncio.provincia_id;
      this.nivel_id = this.anuncio.nivel_id;
      this.etapa_id = this.anuncio.etapa_id;
      this.usuario_id = this.anuncio.usuario_id;
      this.descripcion = this.anuncio.descripcion;
      this.correo = this.anuncio.correo;
      this.tel = this.anuncio.tel;

    });

  }

  addAnuncio(){

    var val = {id:this.id,
              nombre:this.nombre,
              tipo_id : this.tipo_id,
              provincia_id: this.provincia_id,
              nivel_id : this.nivel_id,
              etapa_id : this.etapa_id,
              descripcion : this.descripcion,
              correo : this.correo,
              tel : this.tel};

    this.service.addAnuncio(val).subscribe(res=>{
      alert(res.toString());
    });

    

  }

  updateAnuncio(){

    var val = {id:this.id,
              nombre:this.nombre,
              tipo_id : this.tipo_id,
              provincia_id: this.provincia_id,
              nivel_id : this.nivel_id,
              etapa_id : this.etapa_id,
              descripcion : this.descripcion,
              correo : this.correo,
              tel : this.tel};

    this.service.updateAnuncio(val).subscribe(res=>{
      alert(res.toString());
    });

    

  }
  sideMenuOpen = false;

  closeSideMenu(){
    this.sideMenuOpen = false;
  }

  openSideMenu(){
    this.sideMenuOpen = true;
  }

  getInputValue(nombre:string, tamano:string, tipo:string, provincia:string, nivel:string, etapa:string, descripcion:string, email:string, tel:string ){
    console.log(nombre, tamano, tipo, provincia, nivel, etapa, descripcion, email, tel  )
  }

}
