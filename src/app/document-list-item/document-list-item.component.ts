import { Component, OnInit, Input } from '@angular/core';
import { Document } from '../shared/document.model'

@Component({
  selector: 'document-list-item',
  templateUrl: './document-list-item.component.html',
  styleUrls: ['./document-list-item.component.css'],
  styles: [`
    :host(.active) { 'background-color': '#ebb' }
`, `
li {

  font-size: 1.25rem;
  margin-bottom:0.35rem;
  height:30px;
  padding: 7px;
  width: 300px;
  color: black;

}
.active {
  background-color: gray;
  color: white;
}

`],

})
export class DocumentListItemComponent implements OnInit {

  @Input() document: Document
  @Input() color: string

  constructor() { }

  ngOnInit() {
  }




}
