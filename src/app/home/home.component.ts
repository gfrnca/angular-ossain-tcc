import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <!-- Home Page -->
    <section id="home-section">
      <div class="home">
            <!-- Home Page Content -->
            <div class="content container">
                <div class="content-wrapper">
                    <div class="main-object" id="main">
                        <div class="main-image">
                            <img 
                              src="assets/img/object3.png"
                              width="400"
                              alt="Welcome" 
                            />
                        </div>
                        <div class="main-text">
                            <h1>Ajude o <span style="color: #36af9b;">mundo</span>, <br>de casa!</h1>
                            <p>Fique por dentro de todas as notícias da natureza e comece a ajudar causas a milhares de quilômetros com simplicidade e confiança!</p>

                            

                            <div class="main-labels">
                              <img
                                src="assets/img/googleplay.png"
                                width="130"
                              />
                              <img
                                src="assets/img/appstore.png"
                                width="130"
                              />
                            </div>
                        </div>
                    </div>
                    <div class="content-object">
                        <div class="object-image">
                            <img 
                              width="300" 
                              alt="Welcome" 
                              src="assets/img/object1.svg"
                            />
                        </div>
                        <div class="object-text">
                            <h1>Objetivo</h1>
                            <p>Ossain, desenvolvido pelo grupo de desenvolvedores BulbassaurGroup, por meio de um aplicativo móvel, visa mitigar, por meio de postagens e denúncias, os efeitos humanos no planeta Terra, além de mostrar informações atuais sobre o planeta.</p>
                        </div>
                    </div>

                    <div class="content-object">
                        <div class="object-text down">
                            <h1>Nosso Grupo</h1>
                            O nosso grupo de desenvolvedores, junto ao aplicativo, surgiu como um trabalho de conclusão de curso, seguindo os ods 14 e 15, com o intuito de desenvolver uma aplicação para amenizar os efeitos do ser humano no planeta.
                        </div>
                        <div class="object-image up">
                          <img 
                            width="300"
                            alt="Welcome" 
                            src="assets/img/object2.svg"
                          />
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
