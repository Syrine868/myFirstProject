import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Film from '../model/film';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-form-film',
  templateUrl: './form-film.component.html',
  styleUrls: ['./form-film.component.css']
})
export class FormFilmComponent implements OnInit {
  film: Film = new Film();
  @Output() newfilm = new EventEmitter<Film>();

  constructor(private films:FilmService) { }

  ngOnInit(): void {
  }
  save() {
   // this.newfilm.emit(this.film);
    //console.log(this.film)
    this.films.addFilm(this.film).subscribe();
  }
  

  delete(id) {
    this.films.deleteProduct(id).subscribe();
  }
}
