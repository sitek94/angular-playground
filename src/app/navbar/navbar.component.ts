import { Component } from '@angular/core';

function createLink(name: string) {
  return { name, url: `${name.toLocaleLowerCase().trim().replace(/\s/g, '-')}` };
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  links = [createLink('Home'), createLink('Test Page'), createLink('Tour of Heroes')];
}
