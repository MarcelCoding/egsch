import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FixedGridComponent} from "@egsch/layout";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FixedGridComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}