import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  rayon: number = 0;
  result: number = 0;
  resultcarre: number = 0;
  cote: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  surfaceCercle() {
    if (this.rayon < 0) {
      alert("Must be positive");
    }else{
    this.result =  3.14 * this.rayon * this.rayon;
    return this.result;
    }
  }
  surfaceCarre() {
    if (this.cote < 0) {
      alert("Must be positive");
    } else {
      this.resultcarre = this.cote * this.cote;
      return this.resultcarre ;
    }
  }
}
