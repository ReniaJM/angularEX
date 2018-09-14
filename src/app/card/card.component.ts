import {
  Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';
import {Dog} from "../app.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnChanges,OnInit, DoCheck, AfterContentInit,AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input()
  inputText:string;

  @Input()
  inputDog:Dog;

  show = true;
  // @Output()
  // eventItem = new EventEmitter<string>();

// uruchamaia sie na pocztaku przed onInit, sprawdza czy pola komentó sa zbindowane, musi zmienic sie referencja

  ngOnChanges(changes: SimpleChanges):void{
    // throw new Error("Methot not implemented.")
    console.log('ngOnChanges -uruchomione! = #1');
    console.log(changes)
  }

  constructor(){}

  ngOnInit():void {
    console.log('ngOnInit -uruchomione! = #2');
    this.inputDog.name= "wow"
    // nie ma mozliwosci dostania sie do referecji ktora bedzie w card -komponencie
    // tylko za pomoca after-interfejsow

    // robimy zmienne naszego komonentu, zapytania do serwisu, pobierac dane z serwisu, z bazy danych
  }

  ngDoCheck():void{
    console.log('ngDoCheck - uruchomione! = #3');
    // sprawdza kazda zmiane na stronie
  }

  ngAfterContentInit():void{
    console.log('ngAfterContentInit - uruchomione! = #4');
    // urochamia się po inicjalizacji np <ng-content>
  }

  ngAfterContentChecked():void{
    console.log('ngAfterContentChecked - uruchomione! = #5');
    // urochamia sie po kazdej zmianie np <ng-content> czy referencji #
  }



  ngAfterViewInit():void{
    console.log('ngAfterViewInit- uruchomione! = #6');
    // urochamia się po inicjalizacji  widoku
  }

  ngAfterViewChecked():void{
    console.log('ngAfterViewChecked- uruchomione! = #7');
    // urochamia sie po kazdej zmianie widoku
  }

  ngOnDestroy():void{
    console.log('ngOnDestroy- uruchomione! = #8');
// wywpłuje sie wyedy kiedy komponent ulegnie zniszeniu
//     bo jest użyty *ngIf a nie poprzez property [hidden]
  }

  // uruchamia sie przy jazdej zamianie wywołąnia eventu

  // select(item){
  //   this.eventItem.emit(item);
  //
  // }

  content(){
    this.show =! this.show;

    // nie rowna sie  =! tak samo sam !
  }

}
