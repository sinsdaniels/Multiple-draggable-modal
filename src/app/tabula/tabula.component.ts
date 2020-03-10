import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabula',
  templateUrl: './tabula.component.html',
  styleUrls: ['./tabula.component.scss']
})
export class TabulaComponent implements OnInit {


  @Input() masivs: Array<any>;
  @Input() cfg: Itabula;
  @Output() izveletaisEvent = new EventEmitter();

  izveletais;
  laukuNosaukumi: Array<String>  = [];
  constructor() {
  }

  setIzveletais(el) {
    this.izveletais = el;
    this.setParentIzveletais();
    return this.izveletais;
  }
  
  setParentIzveletais(){
    //console.log(this.izveletais);
    this.izveletaisEvent.emit(this.izveletais);

  }
  showModal(modalId){
    console.log("Double click registred..");
    console.log(this.cfg.modalId);
    $('#mainModal'+modalId).modal('show');
  }
  ngOnInit() {
    for (let n in this.cfg.tabulaGalvasunVertibas) {
      this.laukuNosaukumi.push(n);
    }
  }

}
export interface Itabula {
  virsraksts: string;
  icon: string;
  tabulaGalvasunVertibas: { [laukaNosaukums: string]: string };
  modalId: number;
}
