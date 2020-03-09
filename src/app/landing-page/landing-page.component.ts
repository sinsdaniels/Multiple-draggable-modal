import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  template: `
  <div class="container">
  <div class="title">
      <h1>{{title}}</h1>
  </div>
  <div class="description">
      {{description}}
  </div>
  <div class="biznesaElementi">
      <div class="row" *ngFor="let el of biznesaElementi;">
          <div class="col-sm-4">
              <button [routerLink]="el.route" type="button" class="btn btn-outline-dark" data-toggle="tooltip" data-placement="right" [title]=el.apraksts>{{el.pogasText}}</button>
          </div>
          <div class="col-sm-8"></div>
      </div>
  </div>
</div>
  `,
  styles: [
    `
    .container {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      width: 100%;
      flex-wrap: wrap;
    }
    
    .row{
        margin-bottom: 6px;
    }
    
    .title, .description, .biznesaElementi{
        margin-bottom: 20px;
    }
    
    .title {
      width: 620px;
      text-align: center;
    }

    
    .description{
        text-align: justify;
    }
    
    .biznesaElementi{
        width: 100%;
    }
    
    .btn{
        width: 100%;
    }
    
    `
  ]
})
export class LandingPageComponent implements OnInit {
  title = "WEB bāzētu biznesa sistēmu lietotāja saskarnes dizaina vadlīniju papildinājumu izstrāde";
  description = "Šeit ies iekšā vispārīgais apraksts par to, kas šeit tiek veidots. 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'";
  biznesaElementi;
  constructor() {
    this.biznesaElementi = [
      { route: "/multipleModal", pogasText: "Multiple modal", apraksts: "Multiple modal" },
      { route: "/skatuPiemers", pogasText: "Projekti & Darbinieki", apraksts: "Master detail table" }
    ]
  }

  ngOnInit() {
  }

}
