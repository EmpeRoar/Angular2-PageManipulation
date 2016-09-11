import { Component,Pipe, PipeTransform } from '@angular/core';

@Component({
moduleId: module.id,
  templateUrl: 'account.component.html',
})
export class AccountComponent {
  title = 'Account';
  name = 'julius';
  birthday = new Date(1960, 3, 15);
  price=500;
  todos = [{text:'Wash'},{text:'Hello'},{text:'xxxx'}];
}

