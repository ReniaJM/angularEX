import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {UserComponent} from "./user.component";
import {FormsModule} from "@angular/forms";
import {DasboardComponent} from "./dasboard.component";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DasboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
