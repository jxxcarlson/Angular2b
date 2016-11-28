import { Component } from '@angular/core';
import { Document } from './shared/document.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  d1: Document = new Document( {

    id: 1,
    title: 'Introductory Magick',
    text: 'It _is_ magical!',
    rendered_text: '<p>It <i>is</i> magical!</p>'
  })

  d2: Document = new Document( {

    id: 2,
    title: 'Chemical Stories',
    text: 'It all began with *Democritus*',
    rendered_text: '<p>It all began with <b>Democritus</b></p>  '
  })


  testDocuments: Document[] = [ this.d1, this.d2 ]

}
