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
            <li>
              <a routerLink="/">Início</a>  
            </li>
            <li>
              <a routerLink="/contact">Entrar em contato</a>
            </li>
            <li>
              <a routerLink="/about">Sobre nós</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="mobile-menu deactivated-menu" id="mobile-menu">
      <div class="mobile-menu-wrapper">
        <div class="">
          
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openMenu() {
    let menu = document.getElementById('mobile-menu') as HTMLElement;
    

    menu.classList.toggle('activated-menu');
    
    
  }

}
