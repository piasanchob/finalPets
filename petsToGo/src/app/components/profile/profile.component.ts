import { Component, Input,OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
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
export class ProfileComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() usuariox:any;
  id:number;
  nombre:string;
  cedula:string;
  correo:string;
  fechanac:string;
  usuario:string;
  contraseña:string;

  ngOnInit(): void {
  }

  updateUsuarios(){
    var val = {id:this.id,
      nombre:this.nombre,
      cedula : this.cedula,
      correo: this.correo,
      fechanac : this.fechanac,
      usuario : this.usuario,
      contraseña : this.contraseña,
      };

      this.service.updateUsuarios(val).subscribe(res=>{
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
}
