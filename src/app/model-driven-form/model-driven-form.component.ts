import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../model/contact';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent implements OnInit {

  form_group1: FormGroup;

  contact : Contact = new Contact();
 
  listContacts: Contact []=[];
  constructor() {
  }

  ngOnInit(): void {
  
    this.form_group1 = new FormGroup({
      nom: new FormControl('',[Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z . _ 0-9]+@([a-z]+\.)+[a-z]{2,4}$")]),
     f: new FormGroup({
      typec: new FormControl('', [Validators.required]),
      numc:new FormControl('',[Validators.pattern("[0-9]{16}")]),
      dateexp:new FormControl('',[Validators.required]),
      code:new FormControl('',[Validators.required]),
    })
    });
   
  }
 


  get nom() { return this.form_group1.get('nom'); }
  get email() { return this.form_group1.get('email'); }
  get typec() { return this.form_group1.get('f').get('typec') ; }
  get numc() { return this.form_group1.get('f').get('numc'); }
  get dateexp() { return this.form_group1.get('f').get('dateexp'); }
  get code() { return this.form_group1.get('f').get('code'); }
  get f() { return this.form_group1.get('f');}

  save() {
    this.listContacts.push(this.contact);
    console.log(this.contact)
    this.contact = new Contact();
      
  }


}
