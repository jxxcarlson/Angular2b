import { Component, OnInit, Input} from '@angular/core';
import { Document } from '../shared/document.model'

@Component({
  selector: 'document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  @Input() documents: Document[]

  documentListTitle = 'Documents'

  constructor() { }

  ngOnInit() {
  }

}
