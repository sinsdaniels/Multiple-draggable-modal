import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabula',
  templateUrl: './tabula.component.html',
  styleUrls: ['./tabula.component.scss']
})
export class TabulaComponent implements OnInit {


  @Input() masivs: Array<any>;
  @Input() cfg: Itabula;

  izveletais;
  laukuNosaukumi: Array<String>  = [];
  constructor() {
  }

  setIzveletais(el) {
    this.izveletais = el;
    return this.izveletais;
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
