import {Component} from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: [ './loader.component.css' ]
})
export class LoaderComponent  {

  showLoader: boolean = true;

  public show() {
    this.showLoader = true;
  }

  public hide() {
    this.showLoader = true;
  }

}
