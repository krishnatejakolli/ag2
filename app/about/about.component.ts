import {Component, OnInit} from '@angular/core';
import {StateService} from '../common/state.service';

@Component({
  selector: 'about',
  template: require('./about.component.html')
})
export class AboutComponent implements OnInit{
  title: string = 'A RELIABLE DEVELOPER';
  body:  string = 'An enthusiastic web developer & designer. I create responsive intutive and simple to use websites.';
  message: string;

  constructor(public _stateService: StateService) { }

  ngOnInit() {
    this.message = this._stateService.getMessage();
  }

  updateMessage(m: string): void {
    this._stateService.setMessage(m);
  }
}
