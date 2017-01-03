import {Component, Input} from '@angular/core';
import {Contact} from '../../common/contact.model';

@Component({
  selector: 'contact',
  template: require('./contact.detail.component.html'),
  styles: [`
    .contact {
      cursor: pointer;
      outline: 1px lightgray solid;
      padding: 5px;
      margin: 5px;
    }
  `]
})

export class ContactDetailComponent {
  @Input() contact: Contact;

  doExperiment(): void {
    this.contact.completed += 1;
  };
}
