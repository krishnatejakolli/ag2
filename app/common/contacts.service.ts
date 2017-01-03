import {Injectable} from '@angular/core';
import {Contact} from './contact.model';

@Injectable()
export class ContactsService {
  private contacts: Contact[] = [
    {name: 'Krishna Teja', description: 'This is an contact', completed:0},
    {name: 'Contact 2', description: 'This is an contact', completed:0},
    {name: 'Contact 3', description: 'This is an contact', completed:0},
    {name: 'Contact 4', description: 'This is an contact', completed:0}
  ];

  getContacts(): Contact[] {
    return this.contacts;
  };
}
