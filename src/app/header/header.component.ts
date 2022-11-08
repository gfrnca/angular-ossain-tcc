import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="header container">
      <div class="header-wrapper">
        <!-- Logo -->
        <div class="header-brand">
            <a routerLink="/">
              <img 
                src="assets/img/ossainlogo.png"
                width="200"
                alt="logo"
              >
            </a>
        </div>

        <div class="header-mobile-menu">
          <i (click)="openMenu()" class="fa-solid fa-bars"></i>
        </div>

        <!-- Menu -->
        <div class="header-menu">
          <ul>
            <li *ngFor="let item of items">
              <a [routerLink]="item.ref">{{ item.name }}</a>  
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="mobile-menu deactivated-menu" id="mobile-menu">
      <div class="mobile-menu-wrapper">
        <ul>
          <div *ngFor="let item of items" class="menu-item">
            <li class="container">
              <a><i class={{item.icon}}></i>{{ item.name }}</a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items: any[];

  constructor() { 
    this.items = [
      {
       id: 0, name: 'Página principal', ref: '/', icon: 'fa-solid fa-home'
      },
      {
       id: 1, name: 'Entrar em contato', ref: '/contact', icon: 'fa-solid fa-comment' 
      },
      {
       id: 2, name: 'Sobre nós', ref: '/about', icon: 'fa-solid fa-circle-info'
      }
    ]

  }

  ngOnInit(): void {
    let menu = this.items[0] as HTMLElement;

    console.log(menu)
  }

  openMenu() {
    let menu = document.getElementById('mobile-menu') as HTMLElement;
    

    menu.classList.toggle('activated-menu');

  }

}
