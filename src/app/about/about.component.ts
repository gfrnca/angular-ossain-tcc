import { Component, OnInit } from "@angular/core";
import Splide from "@splidejs/splide";

@Component({
  selector: "app-about",
  template: `
    <!-- About Page -->
    <section id="about">
      <div class="about container">
        <div class="about-wrapper">
          <h1 class="about-title">Sobre <span>nós</span></h1>

          <!-- About Page Content -->
          <div class="about-content">
            <div class="main-container">
              <p class="phrase">
                NA<br />TU<br />RE<br /><span>ZA</span><br />
              </p>
              <p class="main-text">
              Nosso grupo, fundado em 2022 para o desenvolvimento de um Trabalho de Conclusão de Curso (TCC), juntou todo o conhecimento que adquirimos durante os três longos e dificeis anos de ensino técnico, para aplicar da melhor forma nesse projeto.
Hoje, trazemos a vocês a Ossain, um sistema mobile e web que permite que a nossa natureza seja ouvida e respeitada, abaixo vocês poderão conhecer um pouco mais dos desenvolvedores e integrantes presentes nesse grande projeto, através do nosso github e linkedIn :) 
              </p>
            </div>

            <div class="developers-container">
              <h2 class="about-subtitle"><span>Nossa</span> equipe</h2>

              <section class="splide" aria-label="Splide Basic HTML Example">
                <div class="splide__track">
                  <ul class="splide__list">
                    <!-- Gabriel França -->
                    <li class="splide__slide">
                      <div class="card-top">
                        <div class="media-icons">
                          <a
                            href="https://github.com/gfrnca"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div class="fab fa-github"></div>
                          </a>
                          <a
                            href="https://www.linkedin.com/in/gabriel-fran%C3%A7a-616830219/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div class="fab fa-linkedin"></div>
                          </a>
                        </div>
                        <div class="image">
                          <img src="../../assets/img/avatar/franca.jpg" />
                        </div>
                      </div>
                      <div class="card-bottom">
                        <div class="bottom-content">
                          <p class="dev-name">Gabriel França</p>
                          <p class="dev-role">Desenvolvedor Front-end</p>
                        </div>
                      </div>
                    </li>

                    <!-- Gabriel Francisco -->
                    <li class="splide__slide">
                      <div class="card-top">
                        <div class="media-icons">
                        <a
                            href="https://github.com/gabrielLoboo"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div class="fab fa-github"></div>
                          </a>
                          <a
                            href="https://www.freecodecamp.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div class="fab fa-linkedin"></div>
                          </a>
                        </div>
                        <div class="image">
                          <img src="../../assets/img/avatar/francisco.jpg" />
                        </div>
                      </div>
                      <div class="card-bottom">
                        <div class="bottom-content">
                          <p class="dev-name">Gabriel Francisco</p>
                          <p class="dev-role">Desenvolvedor Front-end</p>
                        </div>
                      </div>
                    </li>

                    <!-- Vinicius Henques -->
                    <li class="splide__slide">
                      <div class="card-top">
                        <div class="media-icons">
                        <a
                            href="https://github.com/henquesz"
                            target="_blank"
                            rel="noopener noreferrer"
                          >|
                            <div class="fab fa-github"></div>
                          </a>
                          <a
                            href="https://www.linkedin.com/in/vinicius-henques-5a843a1b9/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div class="fab fa-linkedin"></div>
                          </a>
                        </div>
                        <div class="image">
                          <img src="../../assets/img/avatar/vinicius.jpg" />
                        </div>
                      </div>
                      <div class="card-bottom">
                        <div class="bottom-content">
                          <p class="dev-name">Vinicius Henques</p>
                          <p class="dev-role">Desenvolvedor Fullstack</p>
                        </div>
                      </div>
                    </li>

                    <!-- Marcos Araújo -->
                    <li class="splide__slide">
                      <div class="card-top">
                        <div class="media-icons">
                        <a
                            href="https://www.freecodecamp.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div class="fab fa-github"></div>
                          </a>
                          <a
                            href="https://www.freecodecamp.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div class="fab fa-linkedin"></div>
                          </a>
                        </div>
                        <div class="image">
                          <img src="../../assets/img/avatar/marcos.jpg" />
                        </div>
                      </div>
                      <div class="card-bottom">
                        <div class="bottom-content">
                          <p class="dev-name">Marcos Araújo</p>
                          <p class="dev-role">Suporte de Desenvolvimento</p>
                        </div>
                      </div>
                    </li>
                  

                    <!-- Victória Caroline -->
                    <li class="splide__slide">
                      <div class="card-top">
                        <div class="media-icons">
                        <a
                            href="https://www.freecodecamp.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div class="fab fa-github"></div>
                          </a>
                          <a
                            href="https://www.linkedin.com/in/vict%C3%B3ria-caroline-737095204/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div class="fab fa-linkedin"></div>
                          </a>
                        </div>
                        <div class="image">
                          <img src="../../assets/img/avatar/victoria.jpg" />
                        </div>
                      </div>
                      <div class="card-bottom">
                        <div class="bottom-content">
                          <p class="dev-name">Victória Caroline</p>
                          <p class="dev-role">Documentadora de Sistemas</p>
                        </div>
                      </div>
                    </li>
                    <li class="splide__slide">
                      <div class="card-top">
                        <div class="media-icons">
                        <a
                            href="https://www.freecodecamp.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div class="fab fa-github"></div>
                          </a>
                          <a
                            href="https://www.freecodecamp.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div class="fab fa-linkedin"></div>
                          </a>
                        </div>
                        <div class="image">
                          <img src="../../assets/img/avatar/bruno.jpg" />
                        </div>
                      </div>
                      <div class="card-bottom">
                        <div class="bottom-content">
                          <p class="dev-name">Bruno Reis</p>
                          <p class="dev-role">
                            Desenvolvedor de Banco de Dados
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    var splide = new Splide(".splide", {
      perPage: 3,
      fixedHeight: "20rem",
      gap: "1rem",
      classes: {
        pagination: 'splide__pagination pagination'
      },
      breakpoints: {
        1275: {
          perPage: 2,
        },
        870: {
          perPage: 1,
        },
      },
    });

    splide.mount();
  }
}
