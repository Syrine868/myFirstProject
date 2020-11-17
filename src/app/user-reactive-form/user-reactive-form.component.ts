import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/user';

@Component({
  selector: 'app-user-reactive-form',
  templateUrl: './user-reactive-form.component.html',
  styleUrls: ['./user-reactive-form.component.css']
})
export class UserReactiveFormComponent implements OnInit {

  user_group: FormGroup;
  form_user: FormBuilder = new FormBuilder();
  @Output() newu = new EventEmitter<User>();
  constructor() { 
   
  }

  ngOnInit(): void {
   this.user_group = this.form_user.group({
      nom: ['',[Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required]],
      cin: ['',[ Validators.required,Validators.minLength(8), Validators.maxLength(8)]]
    });

  }


  get nom() { return this.user_group.get('nom'); }
  get email() { return this.user_group.get('email'); }
  get cin() { return this.user_group.get('cin'); }
  save() {
    this.newu.emit(this.user_group.value);
  }

}
