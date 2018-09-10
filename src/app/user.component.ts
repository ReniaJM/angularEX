///<reference path="../../node_modules/@types/selenium-webdriver/index.d.ts"/>
import {Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-user',
  template: `
    <input type="text" (input)="onUserInput($event)" [value] = "name">
    <!--<input type="text" [(ngModel)]="name">-->
    <p>hello {{name}}</p>
    <p>I'm userComponent</p>
    <app-user-detail></app-user-detail>
  `
})
export class UserComponent {
  // name= 'Your name';
  @Input() name;
  @Output() nameChanged = new EventEmitter<string>();

  onUserInput(event){
    // this.name = event.target.value;
    this.nameChanged.emit(event.target.value);
  }
}
