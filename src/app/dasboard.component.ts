import {Component} from "@angular/core";

@Component({
  selector:'app-dasboard',
  templateUrl: './dasboard.component.html',
  // template:`
  //   <p>jndjnjn</p> {{loadState}}
  //   <button (click)="changeState()">fdgsdffgsd</button>
  // `
})
export class DasboardComponent{
  loadState = "loading";

  changeState(){
    this.loadState= "finished";
  }

}
