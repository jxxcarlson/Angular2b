import { Component, OnInit, Input} from '@angular/core';
import { Document } from '../shared/document.model'
import { DocumentService } from '../shared/document.service'

@Component({
  selector: 'document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  @Input() documents: Document[]

  activeDocument: Document

  documentListTitle:string = 'Documents'

  constructor( private documentService: DocumentService ) { }

  ngOnInit() {


  }

  selectDocument(document) {
    console.log(`clicked => ${document.title}`)
    this.activeDocument = document
    this.documentService.announceSelection(document)
  }

}
