import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import Film from '../model/film';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit , OnChanges{

  listFilms: any = [
    {
      nom: 'MANDY', duree: 2 , categorie: 'action',
    },
    {
      nom: 'LOVE-AFTER-LOVE', duree: 3 , categorie: 'drama',
    },
    {
      nom: 'YOU-WERE-NEVER-REALLY-HERE', duree: 2 , categorie: 'drama',
    },
    {
      nom: 'THE-RIDER', duree: 3 , categorie: 'drama',
    },
    {
      nom: 'FIRST-REFORMED', duree: 6 , categorie: 'action',
    },
  ];

  i: number = 0;
  resultat: string = "";
  constructor() { }

  ngOnInit(): void {
    
  }
  calcul2(p: Film) {
    p.duree += 1;
  }
  
  calculer(nb : number) {
    for (nb = 0; nb < this.listFilms.length; nb++)
    {
      if (this.listFilms[nb].categorie == 'action')
      {
        this.i = this.i + 1;
      }
    }
    this.resultat = "Nombre de films dont la catégorie 'Action' est : "+this.i+ " sur  "+ nb + " films";
  }
  ngOnChanges(){
    console.log ("onchanges");
  }
  addFilm(f: Film) {
    this.listFilms.push(f)
    
  }
  
}
