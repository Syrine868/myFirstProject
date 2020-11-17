import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Film from '../model/film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
 
  listFilms: Film[] =  [];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  urlfilm = "http://localhost:3000/film";
  constructor(private http:HttpClient) { }
  getFilms(): string{
    return this.urlfilm;
  }
  addFilm(film: Film): Observable<Film>{
    return this.http.post<Film>(this.urlfilm, film, this.httpOptions);
  }
  deleteProduct (film: Film | number): Observable<Film> {
    const id = typeof film === 'number' ? film : film.duree;
    const url=this.urlfilm+'/'+id;
    return this.http.delete<Film>(url);
    }
}
