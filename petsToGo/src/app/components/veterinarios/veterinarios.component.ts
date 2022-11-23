import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Veterinarios } from 'src/app/models/vets';
import { VetsService } from 'src/app/services/vets.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-veterinarios',
  templateUrl: './veterinarios.component.html',
  styleUrls: ['./veterinarios.component.scss'],
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
export class VeterinariosComponent implements OnInit {


  constructor(private service:SharedService) { }

  
  ngOnInit(): void {

    this.refreshVeterinariosList();
  }

  VeterinariosList:any=[];

  refreshVeterinariosList(){
    this.service.getVeterinariosList().subscribe(data=>{
      this.VeterinariosList=data;
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
