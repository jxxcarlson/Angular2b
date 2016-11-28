import { Component, OnInit } from '@angular/core';

import { Document } from '../shared/document.model'

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  exampleDocument: Document = new Document ({

    title: 'Old Latin Document',

    text: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dictum maximus hendrerit. Duis feugiat egestas dapibus. Aenean pharetra odio in sapien efficitur lobortis. Donec leo dui, efficitur eget nisi ut, pulvinar posuere justo. Morbi eget turpis sapien. Maecenas rutrum ut risus quis porta. Phasellus pharetra efficitur mattis. Cras cursus massa vitae mauris maximus euismod. Quisque ultricies dapibus magna, eu finibus felis mattis ac. Ut vestibulum ex et luctus pretium. Vestibulum egestas, augue volutpat posuere volutpat, diam tortor venenatis ante, at tempus leo mauris vitae lacus. Suspendisse a fermentum ipsum, et efficitur libero. Ut rutrum erat sem, id tempor lectus venenatis non.


Donec ullamcorper est sit amet rutrum volutpat. Suspendisse non hendrerit sapien. Nunc cursus egestas ante, lacinia gravida felis commodo sit amet. Maecenas auctor bibendum ligula vel bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla faucibus nec tortor eu ornare. Nunc fermentum nunc at aliquet pellentesque. In accumsan neque nec ante interdum sodales. Vivamus scelerisque neque in aliquam auctor. Suspendisse metus metus, accumsan at cursus vel, pulvinar faucibus magna. Vestibulum nec luctus lacus. Morbi dapibus sit amet dolor sit amet bibendum. Etiam elementum magna eget massa tempus ultrices. Duis porttitor et ante in mattis.


Aenean vehicula malesuada tellus. Aliquam varius arcu vitae facilisis venenatis. Sed ipsum erat, euismod ut ultrices non, ultricies at tellus. Sed a nisl non massa tincidunt mattis eu pulvinar nibh. Mauris fringilla justo erat, eget pellentesque leo vestibulum nec. Fusce risus nibh, sollicitudin non aliquet nec, finibus egestas est. Morbi id tortor non metus dignissim cursus. Phasellus porttitor nunc tortor, sed tincidunt lorem cursus id. Sed et ornare lectus. Proin quis dui facilisis, congue nulla in, luctus eros. Aliquam erat volutpat.


Aenean imperdiet, purus pulvinar dictum accumsan, ante turpis imperdiet libero, et congue justo arcu sit amet justo. Vestibulum vitae massa eu magna dapibus luctus non ac ante. Proin cursus sollicitudin hendrerit. Nam non felis massa. Quisque hendrerit odio vestibulum ipsum ornare, at lobortis est tempor. Maecenas urna odio, consequat eget mollis et, sodales eget nibh. Nullam nec dapibus lectus, quis dignissim urna. Integer semper, erat eu aliquet tristique, tortor purus iaculis enim, ut laoreet neque sem et tellus.


Vivamus dignissim risus tempus lectus dignissim dapibus. Etiam commodo massa vitae turpis rhoncus fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius pretium posuere. Nam vel felis quam. Maecenas sit amet orci laoreet, pretium ex euismod, egestas nibh. Mauris eu rutrum sem. Etiam consectetur dapibus turpis, at tempus justo lobortis sed. Mauris in gravida nunc. Curabitur metus nisl, sodales in sapien rutrum, consectetur pellentesque sem. Nulla commodo risus in faucibus malesuada. Nulla facilisi.
`
  })

  activeDocument: Document = this.exampleDocument

  constructor() { }

  ngOnInit() {
  }

}
