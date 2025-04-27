import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @Input() isExpanded = false;
  @Output() closeSlider = new EventEmitter<void>();

  slides = [
    { 
      title: 'Bienvenue à ISIMedenine', 
      background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/assets/img/inst11.png)'
    },
    { 
      title: 'Découvrez nos Départements', 
      background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/assets/img/88.png)'
    }
  ];

  currentIndex = 0;

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }

  onClose(): void {
    this.closeSlider.emit();
  }
}