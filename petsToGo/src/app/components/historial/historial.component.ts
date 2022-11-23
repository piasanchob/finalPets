import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss'],
  animations: [
    
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
export class HistorialComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() historial:any;
  id:number;
  nombre:string;
  peso:string;
  raza:string;
  edad:string;
  vacunas:string;
  observaciones:string;
  proxima_cita:string;
  usuario_id:number;
  


  ngOnInit(): void {
    
  }

  updateHistorialMascota(){
    var val = {id:this.id,
      nombre:this.nombre,
      peso : this.peso,
      raza: this.raza,
      edad : this.edad,
      vacunas : this.vacunas,
      observaciones : this.observaciones,
      proxima_cita : this.proxima_cita};
      

    this.service.updateHistorialMascota(val).subscribe(res=>{
    alert(res.toString());
    });
  }

  addHistorialMascota(){
    var val = {id:this.id,
      nombre:this.nombre,
      peso : this.peso,
      raza: this.raza,
      edad : this.edad,
      vacunas : this.vacunas,
      observaciones : this.observaciones,
      proxima_cita : this.proxima_cita};
      

    this.service.addHistorialMascota(val).subscribe(res=>{
    alert(res.toString());
    });
  }

  

  sideMenuOpen = false;
  value = 15;

  closeSideMenu(){
    this.sideMenuOpen = false;
  }

  openSideMenu(){
    this.sideMenuOpen = true;
  }

  getInputValue(nombre:string, peso:string, raza:string, edad:string, vacunas:string, observaciones:string, proxcita:string){
      console.log(nombre, peso, raza, edad, vacunas, observaciones, proxcita)
  }

}
