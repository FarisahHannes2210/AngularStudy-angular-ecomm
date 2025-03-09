import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent],
  //template: html here
  template: ` <app-header />`,
  styles: ``, //can put any className here, each component can have its own style
})
export class AppComponent { //actual class of the component
  title = 'angular-ecomm';
}
