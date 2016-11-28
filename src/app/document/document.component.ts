import { Component, OnInit } from '@angular/core';
import { Document } from '../shared/document.model'
import { DocumentService } from '../shared/document.service'

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  exampleDocument: Document = new Document ({

    id: '23',

    title: 'Old Latin Document',

    text: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dictum maximus hendrerit. Duis feugiat egestas dapibus. Aenean pharetra odio in sapien efficitur lobortis. Donec leo dui, efficitur eget nisi ut, pulvinar posuere justo. Morbi eget turpis sapien. Maecenas rutrum ut risus quis porta. Phasellus pharetra efficitur mattis. Cras cursus massa vitae mauris maximus euismod. Quisque ultricies dapibus magna, eu finibus felis mattis ac. Ut vestibulum ex et luctus pretium. Vestibulum egestas, augue volutpat posuere volutpat, diam tortor venenatis ante, at tempus leo mauris vitae lacus. Suspendisse a fermentum ipsum, et efficitur libero. Ut rutrum erat sem, id tempor lectus venenatis non.
`,
    rendered_text: `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dictum maximus hendrerit. Duis feugiat egestas dapibus. Aenean pharetra odio in sapien efficitur lobortis. Donec leo dui, efficitur eget nisi ut, pulvinar posuere justo. Morbi eget turpis sapien. Maecenas rutrum ut risus quis porta. Phasellus pharetra efficitur mattis. Cras cursus massa vitae mauris maximus euismod. Quisque ultricies dapibus magna, eu finibus felis mattis ac. Ut vestibulum ex et luctus pretium. Vestibulum egestas, augue volutpat posuere volutpat, diam tortor venenatis ante, at tempus leo mauris vitae lacus. Suspendisse a fermentum ipsum, et efficitur libero. Ut rutrum erat sem, id tempor lectus venenatis non.
</p>
`
  })

  activeDocument: Document

  constructor(documentService: DocumentService) {

    this.activeDocument = this.exampleDocument
    documentService.announceSelection(this.exampleDocument)

    documentService.documentAnnounced$.subscribe(
      doc => {
        this.activeDocument = doc;
        console.log(`Active document udpated: ${doc.title}`)
      });
  }

  ngOnInit() {



  }



}
