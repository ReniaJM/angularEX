import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {UserComponent} from "./user.component";
import {FormsModule} from "@angular/forms";
import {DasboardComponent} from "./dasboard.component";
import { UserDetailComponent } from './user-detail/user-detail.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DasboardComponent,
    UserDetailComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
