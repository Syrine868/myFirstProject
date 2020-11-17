import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { todo } from '../model/todo';


@Injectable({
  providedIn: 'root'
})
export class ToDoService {


  url = "https://jsonplaceholder.typicode.com/todos";


  constructor(private http: HttpClient) { }
 
  getTodoList():Observable<todo[]>{
    return this.http.get<todo[]>(this.url);
  }
  
  getTodoListUser(userId):Observable<todo[]>{
    return this.http.get<todo[]>(this.url + "?userId=" + userId);
  }

  
}
