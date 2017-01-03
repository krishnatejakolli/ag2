import {Component, OnInit} from '@angular/core';
import {NgFor} from '@angular/common';
import {Contact} from '../common/contact.model';
import {ContactsService} from '../common/contacts.service';
import {StateService} from '../common/state.service';
import {ContactDetailComponent} from './contact-details/contact.detail.component';

@Component({
  selector: 'contacts',
  template: require('./contacts.component.html'),
  directives: [ContactDetailComponent]
})
export class ContactsComponent implements OnInit {
  title: string = 'Contacts Page';
  body: string = 'This is the about contacts body';
  message: string;
  contacts: Contact[];

  constructor(
    private _stateService: StateService,
    private _contactsService: ContactsService) {}

  ngOnInit() {
    this.contacts = this._contactsService.getContacts();
    this.message = this._stateService.getMessage();
  }

  updateMessage(m: string): void {
    this._stateService.setMessage(m);
  }
}
