import { Component, Input } from '@angular/core';
import { Document } from './document.model';

@Component({
  selector: 'text-pane',
  template: `<div class="rendered-document">{{document.text}}</div>`,
  styles: [`.rendered-document {
    font-size: 1.75rem;
    height: calc(100% - 0px);
    overflow: scroll;
}`]
})
export class TextPane {
  @Input() document:Document;
}
