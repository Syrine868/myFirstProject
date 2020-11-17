import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  listContacts: any = [];
  constructor() { }

  ngOnInit(): void {
  }

  addContact(c: Contact) {
    this.listContacts.push(c);
    console.log(c)
  }

}
