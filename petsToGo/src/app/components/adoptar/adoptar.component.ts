import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-adoptar',
  templateUrl: './adoptar.component.html',
  styleUrls: ['./adoptar.component.scss'],
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
export class AdoptarComponent implements OnInit {

  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.refreshAdoptarList();
  }

  AdoptarList:any=[];

  refreshAdoptarList(){
    this.service.getAnunciosList().subscribe(data=>{
      this.AdoptarList=data;
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
