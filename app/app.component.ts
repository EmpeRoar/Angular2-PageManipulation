import { Component } from '@angular/core';

import './rxjs-operators';
@Component({
  selector: 'app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  title = 'Angular2 Page Manipulation';
  user = 'guess';
  allowFront = false;
  allowBack = false;
  ngOnInit(){
    this.allowFront = true;
    this.allowBack = false;
  }
}


