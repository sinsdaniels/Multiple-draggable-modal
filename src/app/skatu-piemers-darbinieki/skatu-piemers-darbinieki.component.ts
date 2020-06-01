
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Itabula } from '../tabula/tabula.component';
import { ISideNav } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-skatu-piemers-darbinieki',
  templateUrl: './skatu-piemers-darbinieki.component.html',
  styleUrls: ['./skatu-piemers-darbinieki.component.scss']
})
export class SkatuPiemersDarbiniekiComponent implements OnInit {
  projektuCfg: Itabula = {
    virsraksts: "Projekti",
    icon: "description",
    tabulaGalvasunVertibas: {
      id: "#",
      nosaukums: "Nosaukums",
      apraksts: "Apraksts"
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
      uzvards: "Uzvārds",
      amats: "Amats"
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

  public darbiniekuProjekti;
  public projektaDarbi;
  public darbuDarbinieki;
  public projektuDarbi;

  constructor(private dt: DataService) {
    this.darbinieki = dt.getDarbinieki(); //this.darbinieki ir jānofiltrē pēc "Projekti" izvēlētās vērtības un resultāts jāpiešķir šim this.darbinieki
    this.projekti = dt.getProjekti();
    this.darbi = dt.getDarbi();
  }


  getDarbiniekuProjekti(izveletaisDarbinieks) {
    this.darbiniekuProjekti = [];
    this.projekti.forEach(element => {
      if (izveletaisDarbinieks.id == element.darbinieksId) {
        this.darbiniekuProjekti.push(element);
      }
    });
    return this.darbiniekuProjekti
  }

  getProjektuDarbi(izveletaisProjekts) {
    this.projektuDarbi = [];
    this.darbi.forEach(element => {
      if (izveletaisProjekts.id == element.projektsId) {
        this.projektuDarbi.push(element);
      }
    });
    return this.projektuDarbi
  }

  // mekletajaInput(el){
  //   // this.transform(this.darbuDarbinieki, el);
  //   //console.log(el);
  //   // return "";
  // }

  public skatsAizverts = false;

  ngOnInit() {
  }

}
