import { Component, OnInit } from '@angular/core';
import { todo } from '../model/todo';
import { CalculService } from '../services/calcul.service';
import { ToDoService } from '../services/to-do.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  listTodo: todo[];
  i: number = 0;
  j: number = 0;
  res: string = "";
  url: string = "";
  constructor(private sc: CalculService ,private ts: ToDoService) { }

  ngOnInit(): void {
  //this.listTodo=  this.sc.getTodo();
   // this.j = this.sc.getNumberOf(this.listTodo, 'completed', false);
  }

  calcul(i: number) : string{
   // this.sc.calcul(i);
   // console.log(i)
    return this.res="Resultat "+this.sc.calcul(i)
  }


  getTodo() {
    this.ts.getTodoList().subscribe(
    (data:todo[])=>{this.listTodo = data});
    }
}
