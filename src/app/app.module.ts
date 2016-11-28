import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { DocumentComponent } from './document/document.component';

import { HtmlPane } from './shared/htmlpane.component';
import { TextPane } from './shared/textpane.component';

import { TextPageHeightDirective } from './shared/textpageheight.directive'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DocumentComponent,
    HtmlPane, TextPane, TextPageHeightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
