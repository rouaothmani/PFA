import { Component } from '@angular/core';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent {
  raison: string = '';
  confirmation: string = '';

  envoyerEmail() {
    const mailto = `mailto:rouaothmanii@gmail.com?subject=${encodeURIComponent("Attestation de présence")}&body=${encodeURIComponent("La Raison : " + this.raison)}`;
    window.location.href = mailto;

    this.confirmation = 'Votre message est prêt à être envoyé.';
  }
}
