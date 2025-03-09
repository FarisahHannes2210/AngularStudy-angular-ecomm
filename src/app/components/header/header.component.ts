import { Component, signal } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  template: `
    <!-- html in here-->

    <div class="bg-slate-100 px-4 py-3 shadow-md flex justify-between">
      <span>My Store</span>
      <app-primary-button label="Cart" (btnClicked)="showButtonClicked()"/>
    </div>

    <!-- end of html -->
  `,
  styles: ` `,
})
export class HeaderComponent {

  // // if use signal, can change here (make sure to put [] on label)
  // cart = signal('Cart'); 

  showButtonClicked(){
    console.log("clicked cart button");
  }
}
