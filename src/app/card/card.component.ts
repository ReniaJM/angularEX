import {Component, OnInit, Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  inputText:string;

  @Input()
  inputDog:Dog;

  show = true;
  // @Output()
  // eventItem = new EventEmitter<string>();

  ngOnInit():void {
  }

  // select(item){
  //   this.eventItem.emit(item);
  //
  // }

  content(){
    this.show =! this.show;

    // nie rowna sie  =! tak samo sam !
  }

}
