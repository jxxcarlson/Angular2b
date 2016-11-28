import { Component, OnInit, Input } from '@angular/core';
import { Document } from '../shared/document.model'

@Component({
  selector: 'document-list-item',
  templateUrl: './document-list-item.component.html',
  styleUrls: ['./document-list-item.component.css']
})
export class DocumentListItemComponent implements OnInit {

  @Input() document: Document

  constructor() { }

  ngOnInit() {
  }


}
