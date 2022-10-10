import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <!-- Contact Page -->
    <section id="contact">
      <div class="contact container">
        <div class="contact-wrapper">
          <h1 class="contact-title">Entre em <span>contato</span></h1>

          <p>Utilize esta página para enviar uma <span>denúncia</span>, <span>reclamação</span>, <span>sugestão</span> ou <span>elogio</span>. Teremos o prazer em responder todos os chamados no menor tempo possível!</p>


          <!-- Contact Form -->
          <form (ngSubmit)="submitForm()" #contactForm="ngForm">
            <div class="contact-form">

              <!-- Nome -->
              <div class="contact-field">
                <label class="field-label">
                  Nome <span>*</span>
                </label> 
                <input 
                  type="text" 
                  name="nome" 
                  class="field-input" 
                  [(ngModel)]="nome"
                  #nomeInput="ngModel"
                  required
                >
                <div class="field-error" *ngIf="nomeInput.invalid && nomeInput.touched">
                  Você precisa inserir seu nome!
                </div>
              </div>

              <!-- Sobrenome -->
              <div class="contact-field">
                <label class="field-label">
                  Sobrenome
                </label>
                <input 
                  type="text" 
                  name="sobrenome" 
                  class="field-input" 
                  [(ngModel)]="sobrenome"
                >
              </div>

              <!-- E-mail -->
              <div class="contact-field" id="email">
                <label class="field-label">
                  E-mail <span>*</span>
                </label>
                <input 
                  type="email" 
                  name="email" 
                  class="field-input" 
                  [(ngModel)]="email"
                  #emailInput = "ngModel"
                  required
                  email
                >
                <div class="field-error" *ngIf="emailInput.invalid && emailInput.touched">
                  Você precisa inserir um e-mail válido!
                </div>
              </div>

              <!-- Mensagem -->
              <div class="contact-field">
                <label class="field-label">
                  O que precisamos saber? <span>*</span>
                </label>
                <textarea 
                  rows="2" cols="2"
                  name="mensagem" 
                  class="text-area" 
                  [(ngModel)]="mensagem"
                ></textarea>
              </div>

              <button 
                type="submit" 
                class="form-button"
                [disabled]="contactForm.invalid"
              >
                Enviar
              </button>

            </div>
          </form>
        </div>      
      </div>
    </section>
  `,
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  nome: string = '';
  sobrenome: string = '';
  email: string = '';
  mensagem: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    // Grab all fields values
    alert("Obrigado pelo seu feedback!")
    
  }

}
