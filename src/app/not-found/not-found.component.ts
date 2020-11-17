import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { todo } from '../model/todo';
import { ToDoService } from '../services/to-do.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  todo: todo[];
  list: todo[];
  constructor(private route: ActivatedRoute, private router: Router, public service :ToDoService) { }

  ngOnInit(): void {
   this.service.getTodoListUser(this.route.snapshot.params['userId']).subscribe(
      (data: todo[]) => {
      console.log(data);
      this.todo = data;
    });
  }
  }


