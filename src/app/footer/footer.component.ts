import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class="footer">
      <div class="footer-wrapper container">

        <!-- Seção da Marca -->
        <div class="footer-brand">
          <h1>Logo</h1>
          <!-- Mídias sociais -->
          <div class="footer-socials">
            <p>Nossas mídias</p>
            <!-- Instagram -->
            <div class="social-media" id="instagram">
                <i class="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>

        <!-- Acesso Rápido -->
        <div class="footer-menu">
          <ul>
            <p>Acesso Rápido</p>
            <li routerLink="/">
              Página Inicial
            </li>
            <li routerLink="/contact/">
              Entrar em contato
            </li>
            <li>
              Sobre nós
            </li>
          </ul>
        </div>

        <!-- Institucional -->
        <div class="footer-menu">
          <ul>
            <p>Institucional</p>
            <li>
              Documentação
            </li>
            <li>
              Termos de Serviço
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Footer -->
      <div class="footer-bottom container">
          <p>Feito com ❤️ por Bulbasaur Group</p>
      </div>
    </div>
  `,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
