import { Component } from '@angular/core';
@Component({
 moduleId: module.id,
  template: `<div>
    Content Menu Hello World <br/>
    <a routerLink="/dashboard">Dashboard</a> <br/>
    <a routerLink="/contact">Contact</a> </div>`
})
export class ContentComponent {
  title = 'Content';
  
}

