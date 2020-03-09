import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Itabula } from '../tabula/tabula.component';
import { ISideNav } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-skatuPiemers',
  templateUrl: './skatuPiemers.component.html',
  styleUrls: ['./skatuPiemers.component.scss']
})
export class SkatuPiemersComponent implements OnInit {

  projektuCfg: Itabula = {
    virsraksts: "Projekti",
    icon: "description",
    tabulaGalvasunVertibas: {
      id: "#",
      nosaukums: "Nosaukums",
      apraksts: "Apraksts",
      darbiId: "Darbi"
    },
    modalId: 1
  }
  projektuNavCfg: ISideNav = {
    virsraksts: "Projekti",
    icon: "description",
    modalId: 1
  }

  darbuCfg: Itabula = {
    virsraksts: "Darbi",
    icon: "library_books",
    tabulaGalvasunVertibas: {
      id: "#",
      nosaukums: "Nosaukums",
      atbildigais: "Atbildīgais",
      apraksts: "Apraksts",
      uzdevums: "Uzdevums"
    },
    modalId: 2
  }
  darbuNavCfg: ISideNav = {
    virsraksts: "Darbi",
    icon: "library_books",
    modalId: 2
  }

  darbiniekuCfg: Itabula = {
    virsraksts: "Darbinieki",
    icon: "person",
    tabulaGalvasunVertibas: {
      id: "#",
      vards: "Vārds",
      uzvards: "Uzvārds"
    },
    modalId: 3
  }
  darbiniekuNavCfg: ISideNav = {
    virsraksts: "Darbinieki",
    icon: "person",
    modalId: 3
  }

  public projekti;
  public darbinieki;
  public darbi;

  public projektaDarb;

  constructor(private dt: DataService) {
    this.projekti = dt.getProjekti();
    this.darbinieki = dt.getDarbinieki(); //this.darbinieki ir jānofiltrē pēc "Projekti" izvēlētās vērtības un resultāts jāpiešķir šim this.darbinieki
    //this.getProjektaDarb(this.projekti);
    this.darbi = dt.getDarbi();
  }

  // getProjektaDarb(projekts) {
  //   this.projektaDarb = [];
  //   this.darbinieki.forEach(element => {
  //     if (projekts.id == element.projektsId) {
  //       this.projektaDarb.push(element);
  //     }
  //   });
  //   return this.projektaDarb
  // }

  public skatsAizverts = false;

  ngOnInit() {
  }

}
