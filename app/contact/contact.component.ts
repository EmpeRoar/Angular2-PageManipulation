import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
 moduleId: module.id,
  template: `<div>Contact Redirects to Dashboard on Load </div>`
})
export class ContactComponent {
  title = 'Content';
  constructor(private router: Router){}
  ngOnInit(){
        console.log("Contact");
        this.router.navigate(['dashboard']);
  }
}

