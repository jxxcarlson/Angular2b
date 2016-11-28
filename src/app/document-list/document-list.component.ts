import { Component, OnInit, Input} from '@angular/core';
import { Document } from '../shared/document.model'
import { DocumentNotificationService } from '../shared/document-notification.service'

@Component({
  selector: 'document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  @Input() documents: Document[]

  activeDocument: Document

  documentListTitle:string = 'Documents'

  constructor( private documentService: DocumentNotificationService ) { }

  ngOnInit() {


  }

  selectDocument(document) {
    console.log(`clicked => ${document.title}`)
    this.activeDocument = document
    this.documentService.announceSelection(document)
  }

  isActive(document: Document): boolean {

    if ( document == undefined) {

      console.log(`false: in isActive, document is undefined`)
      return false

    }

    if ( document == this.activeDocument) {

      console.log(`true: ${document.id}/${this.activeDocument.id}` )
      return true

    } else {

      console.log(`false: ${document.id}/${this.activeDocument}` )
      return false
    }

  }

  getBGColor(document) {

    //console.log(`docs: ${document.id} ${this.activeDocument.id}`)


    // if (this.activeDocument == undefined || document != this.activeDocument) {
    if ( document == this.activeDocument) {

      console.log(`COLOR: ${document.id}/${this.activeDocument.id}` )
      return "'darkred'"

    } else {

      console.log(`NEUTRAL: ${document.id}/${this.activeDocument}` )
      return "'gray'"
    }
    /*
    console.log(`docs: ${document.id}` )
    return "'blue'"
    */
  }

}
