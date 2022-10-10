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
                            <h1>Título</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishin</p>
                        </div>
                    </div>

                    <div class="content-object">
                        <div class="object-text down">
                            <h1>Título</h1>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
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
