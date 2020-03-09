import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getProjekti(){
    return [
      {id: "0000", nosaukums: "Jauns projekts #1", apraksts: "#1", darbiId: ["0000"]},
      {id: "0001", nosaukums: "Jauns projekts #2", apraksts: "#2", darbiId: ["0000"]},
      {id: "0002", nosaukums: "Jauns projekts #3", apraksts: "#3", darbiId: ["0000", "0001"]},
      {id: "0003", nosaukums: "Jauns projekts #4", apraksts: "#4", darbiId: ["0000", "0001"]},
      {id: "0004", nosaukums: "Jauns projekts #5", apraksts: "#5", darbiId: ["0000", "0001", "0002"]},
      {id: "0005", nosaukums: "Jauns projekts #6", apraksts: "#6", darbiId: ["0000", "0001", "0002"]},
      {id: "0006", nosaukums: "Jauns projekts #7", apraksts: "#7", darbiId: ["0000", "0001", "0002", "00003"]},
      {id: "0007", nosaukums: "Jauns projekts #8", apraksts: "#8", darbiId: ["0000", "0001", "0002", "00003"]},
      {id: "0008", nosaukums: "Jauns projekts #9", apraksts: "#9", darbiId: ["0000", "0001", "0002", "00003"]}
    ]
  }
  getDarbi(){
    return [
      {id: "0000", nosaukums: "Darba uzdevums #1", atbildigais : "0000", apraksts: "DU apraksts #1", uzdevums: "DU uzdevums #1"},
      {id: "0001", nosaukums: "Darba uzdevums #2", atbildigais : "0000", apraksts: "DU apraksts #2", uzdevums: "DU uzdevums #2"},
      {id: "0002", nosaukums: "Darba uzdevums #3", atbildigais : "0001", apraksts: "DU apraksts #3", uzdevums: "DU uzdevums #3"},
      {id: "0003", nosaukums: "Darba uzdevums #4", atbildigais : "0001", apraksts: "DU apraksts #4", uzdevums: "DU uzdevums #4"},
      {id: "0004", nosaukums: "Darba uzdevums #5", atbildigais : "0002", apraksts: "DU apraksts #5", uzdevums: "DU uzdevums #5"},
      {id: "0005", nosaukums: "Darba uzdevums #6", atbildigais : "0002", apraksts: "DU apraksts #6", uzdevums: "DU uzdevums #6"},
      {id: "0006", nosaukums: "Darba uzdevums #7", atbildigais : "0003", apraksts: "DU apraksts #7", uzdevums: "DU uzdevums #7"},
      {id: "0007", nosaukums: "Darba uzdevums #8", atbildigais : "0003", apraksts: "DU apraksts #8", uzdevums: "DU uzdevums #8"}

    ]
  }
  getDarbinieki(){
    return [
      {id: "0000", vards: "Jānis", uzvards: "Bērziņš"},
      {id: "0001", vards: "Anna", uzvards: "Bērziņa"},
      {id: "0002", vards: "Ansis", uzvards: "Kviesis"},
      {id: "0003", vards: "Signe", uzvards: "Kviese"},
      {id: "0004", vards: "Andrejs", uzvards: "Lagzdiņš"},
      {id: "0005", vards: "Sabīne", uzvards: "Lagzdiņa"},
      {id: "0006", vards: "Aleksejs", uzvards: "Liepa"},
      {id: "0007", vards: "Maija", uzvards: "Liepa"},
      {id: "0008", vards: "Kārlis", uzvards: "Ozols"},
      {id: "0009", vards: "Justīne", uzvards: "Ozola"},
    ]
  }

  constructor() { }
}
