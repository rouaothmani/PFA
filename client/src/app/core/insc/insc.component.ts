import { Component } from '@angular/core';
import { InscService } from './insc.service';

@Component({
  selector: 'app-insc',
  templateUrl: './insc.component.html',
  styleUrls: ['./insc.component.css']
})
export class InscComponent {
    cinNumber = '';
    message = '';
  
    constructor(private inscService: InscService) {}
  
    checkCin() {
      this.inscService.checkCinExists(this.cinNumber).subscribe({
        next: (response) => {
          if (response.exists) {
            alert('Contacter l\'administrateur');
          } else {
            alert('ERREUR');
          }
        },
        error: () => {
          alert('Erreur lors de la vérification du CIN');
        }
      });
  
      this.inscService.checkCinExists(this.cinNumber).subscribe({
        next: (response) => {
          this.message = response.exists 
            ? 'Ce CIN existe dans notre base de données' 
            : 'Ce CIN n\'existe pas dans notre base de données';
        },
        error: () => {
          this.message = 'Erreur lors de la vérification du CIN';
        }
      });
    }
  }
