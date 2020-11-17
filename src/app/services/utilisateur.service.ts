import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from '../model/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  listUsers: Utilisateur[]=[
   /* {id: 1, name: "Leanne Graham", username: "Bret", email:
    "Sincere@april.biz"},
    {id: 2, name: "Ervin Howell", username: "Bret", email:
    "Shanna@melissa.tv"},
    {id: 3, name: "Clementine Bauch", username: "Samantha", email:
    "Nathan@yesenia.net"}*/
  ]
  
   /* inputval :string= "";
  i: number = 0;
   url = "https://jsonplaceholder.typicode.com/users";*/
  UserUrl = "http://localhost:3000/users"
  
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
  }

  constructor(private http: HttpClient) { }
      
  //Atelier 10

  getUsersByUrl() :Observable<Utilisateur[]>{
    return this.http.get<Utilisateur[]>(this.UserUrl);
  }


  deleteUser(utilisateur: Utilisateur | number): Observable<Utilisateur>{
    const id = typeof utilisateur === 'number' ? utilisateur : utilisateur.id;
    const url = this.UserUrl + '/' + id;
    return this.http.delete<Utilisateur>(url);
  }

  addUser(utilisateur: Utilisateur): Observable<Utilisateur>{
    return this.http.post<Utilisateur>(this.UserUrl, utilisateur, this.httpOptions);
  }
  updateUser(id: number, utilisateur: Utilisateur): Observable<Utilisateur>{
    return this.http.put<Utilisateur>(this.UserUrl+'/'+id, utilisateur, this.httpOptions);
  }

 /* getInpuval(inputval: string): string{
    for (let nb = 0; nb < this.listUsers.length; nb++)
    {
      if (this.listUsers[nb].username  == inputval )
      {
        this.i = this.i + 1;
      }
    }  
    return  this.inputval = "Nombre de Username en total est : " + this.i+" ";
    
  }

  
  getUsers(): Utilisateur[]{
    return this.listUsers;
  }

  getTodoList():Observable<Utilisateur[]>{
    return this.http.get<Utilisateur[]>(this.url);
  }*/
  
 
}
