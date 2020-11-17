import { Injectable } from '@angular/core';
import { todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class CalculService {
  nb: number = 0;
  i: number = 0;
  k: number = 0;
  resultat: string = "";
  

 listTodo: todo[]=[
    {"userId": 1, "id": 1, "title": "delectus aut autem", "completed":false},
    {"userId": 1, "id": 2, "title": "quis ut nam facilis et officia qui", "completed": false},
    {"userId": 1, "id": 3, "title": "fugiat veniam minus", "completed":false},
    { "userId": 1, "id": 4, "title": "quo adipisci enim quam ut ab", "completed": true }
  ];
  constructor() {

  }


  getTodo(): todo[]{
    return this.listTodo;
  }
  
  getNumberOf(list: any[], critiria: string, value: any): number {
    
    if (value == critiria)
              this.k = this.k + 1;
    return this.k;
  }
  calcul(nb: number): string{
  for (nb = 0; nb < this.listTodo.length; nb++)
  {
    if (this.listTodo[nb].completed )
    {
      this.i = this.i + 1;
    }
  }
  return  this.resultat = "Nombre de Todo dont sont completed : " + this.i + " sur  " + nb + " TodoS";

}
}
