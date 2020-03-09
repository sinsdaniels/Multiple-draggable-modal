import { Component, OnInit, Input } from '@angular/core';
import { Itabula } from '../tabula/tabula.component';

@Component({
  selector: 'app-labosana',
  templateUrl: './labosana.component.html',
  styleUrls: ['./labosana.component.scss']
})
export class LabosanaComponent implements OnInit {

  @Input() public laukuNosaukumi: Array<String>;
  @Input() public obj;
  @Input() public cfg : Itabula;
  constructor() {}

  ngOnInit() {
  }

}
