import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';
  rootName = 'Renia';
  rootItems = ['apple', 'banana', 'cheeries'];

  onNameChanged(newName) {
    this.rootName = newName;

  }

  onItemwasAdded(newItem ){
    this.rootItems.push(newItem);
    console.log(this.rootItems);
  }
}
