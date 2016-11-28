

import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Document }  from './document.model';

@Injectable()
export class DocumentService {


    activeDocument: Document

    // Observable document sources
    private documentSelectionAnnounced = new Subject<Document>();

    // Observable document streams
    documentAnnounced$ = this.documentSelectionAnnounced.asObservable();


    // Service message commands
    announceSelection(document: Document) {
      this.activeDocument = document
      console.log(`Announced: ${document.title}`)
      this.documentSelectionAnnounced.next(document);
    }

}
