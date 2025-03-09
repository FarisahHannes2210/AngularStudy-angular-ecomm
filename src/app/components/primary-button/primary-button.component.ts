import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
   <button class="bg-blue-200 px-3 rounded-md"  (click)="btnClicked.emit()">
    {{label()}}
   </button>
  `,
  styles: `

  `
})
export class PrimaryButtonComponent {
  label = input('');

  btnClicked = output();


}
