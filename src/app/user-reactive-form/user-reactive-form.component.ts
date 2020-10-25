import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-reactive-form',
  templateUrl: './user-reactive-form.component.html',
  styleUrls: ['./user-reactive-form.component.css']
})
export class UserReactiveFormComponent implements OnInit {

  user_group: FormGroup;

  form_user: FormBuilder = new FormBuilder();

  constructor() { 
  
  }



  ngOnInit(): void {
   
    this.user_group = this.form_user.group({
      nom: ['',[Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern("^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$")]],
      cin: ['',[ Validators.required,Validators.minLength(8), Validators.maxLength(8)]]
    });
  }


  get nom() { return this.user_group.get('nom'); }
  get email() { return this.user_group.get('email'); }
  get cin() { return this.user_group.get('cin'); }
}
