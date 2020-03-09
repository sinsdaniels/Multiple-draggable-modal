import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Input() cfg: ISideNav;

  constructor() { }

  ngOnInit() {
  }

}
export interface ISideNav {
  virsraksts: string;
  icon: string;
  modalId: number;
}
