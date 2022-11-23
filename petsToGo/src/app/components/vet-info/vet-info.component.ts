import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-vet-info',
  templateUrl: './vet-info.component.html',
  styleUrls: ['./vet-info.component.scss'],
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
  ],
  styles: [`
    .star {
      font-size: 1.5rem;
      color: #b0c4de;
    }
    .filled {
      color: #1e90ff;
    }
    .bad {
      color: #deb0b0;
    }
    .filled.bad {
      color: #ff1e1e;
    }
  `]

})
export class VetInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sideMenuOpen = false;
  currentRate = 6;

  closeSideMenu(){
    this.sideMenuOpen = false;
  }

  openSideMenu(){
    this.sideMenuOpen = true;
  }

}
