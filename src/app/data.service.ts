import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getProjekti(){
    return [
      {id: "0000", nosaukums: "Jauns projekts #1", apraksts: "attīstībai", darbinieksId: "0000"},
      {id: "0001", nosaukums: "Jauns projekts #2", apraksts: "attīstībai", darbinieksId: "0000"},
      {id: "0002", nosaukums: "Jauns projekts #3", apraksts: "attīstībai", darbinieksId: "0001"},
      {id: "0003", nosaukums: "Jauns projekts #4", apraksts: "attīstībai", darbinieksId: "0001"},
      {id: "0004", nosaukums: "Jauns projekts #5", apraksts: "attīstībai", darbinieksId: "0001"},
      {id: "0005", nosaukums: "Jauns projekts #6", apraksts: "izaugsmei", darbinieksId: "0002"},
      {id: "0006", nosaukums: "Jauns projekts #7", apraksts: "izaugsmei", darbinieksId: "0002"},
      {id: "0007", nosaukums: "Jauns projekts #8", apraksts: "izaugsmei", darbinieksId: "0003"},
      {id: "0008", nosaukums: "Jauns projekts #9", apraksts: "izaugsmei", darbinieksId: "0003"}
    ]
  }
  getDarbi(){
    return [
      {id: "0000", nosaukums: "Darba uzdevums #1", apraksts: "DU apraksts #1", uzdevums: "DU uzdevums #1", projektsId: "0000"},
      {id: "0001", nosaukums: "Darba uzdevums #2", apraksts: "DU apraksts #2", uzdevums: "DU uzdevums #2", projektsId: "0000"},
      {id: "0002", nosaukums: "Darba uzdevums #3", apraksts: "DU apraksts #3", uzdevums: "DU uzdevums #3", projektsId: "0002"},
      {id: "0003", nosaukums: "Darba uzdevums #4", apraksts: "DU apraksts #4", uzdevums: "DU uzdevums #4", projektsId: "0002"},
      {id: "0004", nosaukums: "Darba uzdevums #5", apraksts: "DU apraksts #5", uzdevums: "DU uzdevums #5", projektsId: "0002"},
      {id: "0005", nosaukums: "Darba uzdevums #6", apraksts: "DU apraksts #6", uzdevums: "DU uzdevums #6", projektsId: "0003"},
      {id: "0006", nosaukums: "Darba uzdevums #7", apraksts: "DU apraksts #7", uzdevums: "DU uzdevums #7", projektsId: "0003"},
      {id: "0007", nosaukums: "Darba uzdevums #8", apraksts: "DU apraksts #8", uzdevums: "DU uzdevums #8", projektsId: "0004"},
      
      {id: "0008", nosaukums: "Darba uzdevums #1", apraksts: "DU apraksts #1", uzdevums: "DU uzdevums #1", projektsId: "0001"},
      {id: "0009", nosaukums: "Darba uzdevums #2", apraksts: "DU apraksts #2", uzdevums: "DU uzdevums #2", projektsId: "0001"},
      {id: "0010", nosaukums: "Darba uzdevums #3", apraksts: "DU apraksts #3", uzdevums: "DU uzdevums #3", projektsId: "0001"},
      {id: "0011", nosaukums: "Darba uzdevums #4", apraksts: "DU apraksts #4", uzdevums: "DU uzdevums #4", projektsId: "0001"},
      {id: "0012", nosaukums: "Darba uzdevums #5", apraksts: "DU apraksts #5", uzdevums: "DU uzdevums #5", projektsId: "0001"}

    ]
  }
  getDarbinieki(){
    return [
      {id: "0000", vards: "Jānis", uzvards: "Bērziņš", amats:"Priekšnieks", darbsId: "0000"},
      {id: "0001", vards: "Anna", uzvards: "Bērziņa", amats:"Priekšnieks", darbsId: "0000"},
      {id: "0002", vards: "Ansis", uzvards: "Kviesis", amats:"Padomdevējs", darbsId: "0001"},
      {id: "0003", vards: "Signe", uzvards: "Kviese", amats:"Padomdevējs", darbsId: "0001"},
      {id: "0004", vards: "Andrejs", uzvards: "Lagzdiņš", amats:"Padomdevējs", darbsId: "0008"},
      {id: "0005", vards: "Sabīne", uzvards: "Lagzdiņa", amats:"Ofisa darbinieks", darbsId: "0008"},
      {id: "0006", vards: "Aleksejs", uzvards: "Liepa", amats:"Ofisa darbinieks", darbsId: "0008"},
      {id: "0007", vards: "Maija", uzvards: "Liepa", amats:"Ofisa darbinieks", darbsId: "0012"},
      {id: "0008", vards: "Kārlis", uzvards: "Ozols", amats:"Ofisa darbinieks", darbsId: "0012"},
      {id: "0009", vards: "Justīne", uzvards: "Ozola", amats:"Ofisa darbinieks", darbsId: "0012"},
    ]
  }

  constructor() { }
}
