import {Component} from '@angular/core';
import {CardComponent} from "./card/card.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'nauka programowania';
  dog = new Dog('Reksio');
  show = true;

  changeTitle(){
  this.title = 'angular is cool'
  }

  changeDog(){
  // this.dog.name= "Sweety"
    this.dog= new Dog('sweety');
  }

  nothing(){
  this.show= !this.show;
  }

  destoy(){
    this.show =! this.show;
  }

}
export class Dog {
  constructor(public name:string){

  }

  // rootName = 'Renia';
  // rootItems = ['apple', 'banana', 'cheeries'];

//   onNameChanged(newName) {
//     this.rootName = newName;
//
//   }
//
//   selected(task:string):void{
// console.log(task)
//   }
//
//   @ViewChild('childRef')
//
//   childComoponent:CardComponent
//
//   @ViewChild('inputText')
//
//   input:ElementRef
//
//   add(input:HTMLInputElement){
//     this.rootItems.push(input.value)
//     // this.childComoponent.items=[];
//     this.input.nativeElement.value=''
//
//   }

  // onItemwasAdded(newItem ){
  //   //odbiornik emita
  //   this.rootItems.push(newItem);
  //   console.log(this.rootItems);
  // }

}
