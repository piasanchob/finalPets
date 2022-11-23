import { Component, Input, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

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
    
    //this.birthday.minDate = new Date(1900,0);
  }


  addUsuario(){
    var val = {id:this.id,
      nombre:this.nombre,
      cedula : this.cedula,
      correo: this.correo,
      fechanac : this.fechanac,
      usuario : this.usuario,
      contraseña : this.contraseña,
      };

      this.service.addUsuarios(val).subscribe(res=>{
        alert(res.toString());
      });
      
  }

  getInputValue(nombre:string,id:string,email:string,nacimiento:string,usuario:string,password:string ){
    console.log(nombre,id,email,nacimiento, usuario,password)
  }

  birthday: NgbDateStruct;

}
