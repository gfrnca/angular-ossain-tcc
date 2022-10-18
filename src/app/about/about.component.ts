import { Component, OnInit } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-about',
  template: `
    <!-- About Page -->
    <section id="about">
      <div class="about container">
        <div class="about-wrapper">
          <h1 class="about-title">Sobre <span>nós</span></h1>

          <!-- About Page Content -->
          <div class="about-content">
            <div class="main-container">
              <p class="phrase">NA<br>TU<br>RE<br><span>ZA</span><br></p>
              <p class="main-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
                          <div class="fab fa-github">

                          </div>
                          <div class="fab fa-linkedin">

                          </div>
                        </div>
                        <div class="image">
                          <img src='../../assets/img/franca.jpg'/>
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
                          <div class="fab fa-github">

                          </div>
                          <div class="fab fa-linkedin">

                          </div>
                        </div>
                        <div class="image">
                          <img src='../../assets/img/francisco.jpg'/>
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
                          <div class="fab fa-github">

                          </div>
                          <div class="fab fa-linkedin">

                          </div>
                        </div>
                        <div class="image">
                          <img src='../../assets/img/vinicius.jpg'/>
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
                          <div class="fab fa-github">

                          </div>
                          <div class="fab fa-linkedin">

                          </div>
                        </div>
                        <div class="image">
                          <img src='../../assets/img/marcos.jpg'/>
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
                          <div class="fab fa-github">

                          </div>
                          <div class="fab fa-linkedin">

                          </div>
                        </div>
                        <div class="image">
                          <img src='../../assets/img/victoria.jpg'/>
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
                          <div class="fab fa-github">

                          </div>
                          <div class="fab fa-linkedin">

                          </div>
                        </div>
                        <div class="image">
                          <img src='../../assets/img/franca.jpg'/>
                        </div>
                      </div>
                      <div class="card-bottom">
                        <div class="bottom-content">
                          <p class="dev-name">Bruno Reis</p>
                          <p class="dev-role">Desenvolvedor de Banco de Dados</p>
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
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var splide = new Splide( '.splide', {
      perPage: 3,
      focus: 0,
      fixedHeight: '20rem',
      gap: '1rem',
      breakpoints: {
        1275: {
        perPage: 2,
        },
        870: {
        perPage: 1,
        },
      }, 
    } );
    
    splide.mount();
  }

}
