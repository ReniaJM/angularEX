import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() items= [];
  @Output() itemAdded = new EventEmitter<string>();
  newItem= ''

  constructor() { }

  ngOnInit() {
  }


  onAddItem(){
    this.itemAdded.emit(this.newItem)

  }
}
