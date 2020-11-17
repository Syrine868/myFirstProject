import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import Film from '../model/film';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit , OnChanges{

  listFilms: any = [];

  i: number = 0;
  resultat: string = "";
  constructor(private sf : FilmService) { }

  ngOnInit(): void {
    this.listFilms = this.sf.getFilms();
    
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
