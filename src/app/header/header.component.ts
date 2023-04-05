import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="header container">
      <div class="header-wrapper">
        <!-- Logo -->
        <div class="header-brand">
            <a routerLink="/">
              <img class="image"/>
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
        <h1><span>Menu d</span>e navegação</h1>
        <ul>
          <li>
            <a routerLink="/" class="mobile-link">Início</a>  
          </li>
          <li>
            <a routerLink="/contact" class="mobile-link">Entrar em contato</a>  
          </li>
          <li>
            <a routerLink="/about" class="mobile-link">Sobre nós</a>  
          </li>
        </ul>
        <h1><span>Insti</span>tucional</h1>
        <ul>
          <li>
            Documentação
          </li>
          <li>
            Termos de serviço
          </li>
          <button (click)="toggleDarkTheme()">Dark Mode Experimental</button>
        </ul>
      </div>
    </div>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let setDarkMode = localStorage.getItem('dark-mode');
    if(setDarkMode === 'on'){
     this.DarkMode();
  }

    let menu = document.getElementById('mobile-menu') as HTMLElement;
    
    let mobileLinks = document.querySelectorAll('.mobile-link');

    Array.from(mobileLinks).map(function(x){x.addEventListener('click', () => {
      menu.classList.toggle('activated-menu');
    })})
  
  }

  DarkMode(): void {
    document.body.classList.toggle('dark-theme');
  }
  

  toggleDarkTheme(): void {

    let setDarkMode = localStorage.getItem('dark-mode');

    if(setDarkMode !== "on"){
      this.DarkMode();
       localStorage.setItem('dark-mode', 'on');

    }else{
      this.DarkMode();
      localStorage.setItem('dark-mode', "off");

    }
 }

 

  openMenu() {
    let menu = document.getElementById('mobile-menu') as HTMLElement;
    
    menu.classList.toggle('activated-menu');
  }


}
