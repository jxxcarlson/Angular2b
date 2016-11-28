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

import { DocumentService } from './shared/document.service';

import { TextPageHeightDirective } from './shared/textpageheight.directive';
import { DocumentListComponent } from './document-list/document-list.component';
import { DocumentListItemComponent } from './document-list-item/document-list-item.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DocumentComponent,
    HtmlPane, TextPane, TextPageHeightDirective,
    DocumentListComponent, DocumentListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DocumentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
