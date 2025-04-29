import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
    nom: string = '';
    email: string = '';
    sujet: string = '';
    message: string = '';
    confirmation: string = '';
  
    envoyerEmail() {
      const mailto = `mailto:rouaothmanii@gmail.com?subject=${encodeURIComponent(this.sujet)}&body=${encodeURIComponent("Nom: " + this.nom + "\nEmail: " + this.email + "\n\n" + this.message)}`;
      window.location.href = mailto;
  
      this.confirmation = 'Votre message est prêt à être envoyé.';
    }

}

