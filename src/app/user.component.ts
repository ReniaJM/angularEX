import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <input type="text" (input)="onUserInput($event)" [value] = "name">
    <!--<input type="text" [(ngModel)]="name">-->
    <p>hello {{name}}</p>
    <p>I'm userComponent</p>
  `
})
export class UserComponent {
  // name= 'Your name';
  @Input() name;

  onUserInput(event){
    this.name = event.target.value;
  }
}
