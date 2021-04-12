import {Component} from '@angular/core';
import {LoaderComponent} from "./loader.component";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  showLoader = true;

  teste() {
    LoaderComponent.length
  }
}
